const chess = {
    username: "hhugin",
    stats: null,
    games: [],
    description: "This section tracks my chess journey. Here you'll find recent games, in-depth analysis, notable positions from matches and studies, and my progress over time. The focus is on learning, improvement, and reflecting on each game.",
    currentPage: 'overview',
    profile: {
        avatar: null,
        joined: null,
        rapid10Rating: 'N/A',
        rapid10Best: 'N/A',
        rapid10RatingHistory: [],
        rapidStats: null,
    }
};

// Função para buscar dados do Chess.com API
async function fetchChessData() {
    try {
        // Buscar dados do perfil
        const statsResponse = await fetch(`https://api.chess.com/pub/player/${chess.username}`);
        if (!statsResponse.ok) throw new Error('Profile fetch failed');
        const statsData = await statsResponse.json();
        
        console.log('=== PROFILE DATA ===');
        console.log(JSON.stringify(statsData, null, 2));
        
        // Guardar dados do perfil
        chess.profile.avatar = statsData.avatar || null;
        chess.profile.joined = new Date(statsData.joined * 1000).toLocaleDateString();
        
        // Buscar stats detalhadas
        const statsUrl = `https://api.chess.com/pub/player/${chess.username}/stats`;
        const statsDetailResponse = await fetch(statsUrl);
        if (!statsDetailResponse.ok) throw new Error('Stats fetch failed');
        const statsDetail = await statsDetailResponse.json();
        
        console.log('=== STATS DETAIL ===');
        console.log(JSON.stringify(statsDetail, null, 2));
        
        // Rapid rating e best
        if (statsDetail.chess_rapid && statsDetail.chess_rapid.last && statsDetail.chess_rapid.last.rating) {
            chess.profile.rapid10Rating = statsDetail.chess_rapid.last.rating;
            console.log('✓ Rapid rating encontrado:', chess.profile.rapid10Rating);
        } else {
            console.log('✗ Rapid rating não encontrado');
            chess.profile.rapid10Rating = 'N/A';
        }

        if (statsDetail.chess_rapid && statsDetail.chess_rapid.best && statsDetail.chess_rapid.best.rating) {
            chess.profile.rapid10Best = statsDetail.chess_rapid.best.rating;
            console.log('✓ Rapid best encontrado:', chess.profile.rapid10Best);
        } else {
            chess.profile.rapid10Best = 'N/A';
        }

        // Guardar stats all-time de rapid
        if (statsDetail.chess_rapid) {
            chess.profile.rapidStats = {
                current: statsDetail.chess_rapid.last?.rating || 'N/A',
                best: statsDetail.chess_rapid.best?.rating || 'N/A',
                bestDate: statsDetail.chess_rapid.best ? new Date(statsDetail.chess_rapid.best.date * 1000).toLocaleDateString() : 'N/A',
                wins: statsDetail.chess_rapid.record?.win || 0,
                losses: statsDetail.chess_rapid.record?.loss || 0,
                draws: statsDetail.chess_rapid.record?.draw || 0,
            };
            console.log('✓ Stats all-time rapid:', chess.profile.rapidStats);
        }
        
        // Buscar histórico de rating de rapid
        try {
            const historyUrl = `https://api.chess.com/pub/player/${chess.username}/stat/rapid/rating-history`;
            const historyResponse = await fetch(historyUrl);
            if (historyResponse.ok) {
                const historyData = await historyResponse.json();
                chess.profile.rapid10RatingHistory = historyData.slice(-10) || [];
                console.log('=== RATING HISTORY ===');
                console.log('Histórico rapid (últimos 10):', chess.profile.rapid10RatingHistory);
            }
        } catch (e) {
            console.error('✗ Erro ao buscar histórico:', e);
        }
        
        // Buscar últimos jogos
        try {
            const gamesResponse = await fetch(`https://api.chess.com/pub/player/${chess.username}/games/2026/01`);
            if (gamesResponse.ok) {
                const gamesData = await gamesResponse.json();
                console.log('=== GAMES DATA ===');
                console.log('Total de jogos em Janeiro 2026:', gamesData.games?.length || 0);
                
                chess.games = (gamesData.games || []).slice(0, 20).map(game => ({
                    url: game.url,
                    pgn: game.pgn,
                    timeControl: game.time_control,
                    endTime: new Date(game.end_time * 1000).toLocaleDateString(),
                    rated: game.rated,
                    result: game.white.username === chess.username ? 
                        (game.white.result === 'win' ? 'Win' : game.white.result === 'resigned' ? 'Loss' : 'Draw') :
                        (game.black.result === 'win' ? 'Win' : game.black.result === 'resigned' ? 'Loss' : 'Draw'),
                    opponent: game.white.username === chess.username ? game.black.username : game.white.username,
                    opponentRating: game.white.username === chess.username ? game.black.rating : game.white.rating,
                    myRating: game.white.username === chess.username ? game.white.rating : game.black.rating
                }));
                console.log('✓ Games carregados:', chess.games.length);
            }
        } catch (e) {
            console.error('✗ Erro ao buscar games:', e);
        }
        
        console.log('=== RESUMO FINAL ===');
        console.log('Username:', chess.username);
        console.log('Rapid Rating:', chess.profile.rapid10Rating);
        console.log('Rapid Best:', chess.profile.rapid10Best);
        console.log('Rapid Stats:', chess.profile.rapidStats);
        
        // Re-render da página se já estiver visível
        if (window.renderChessOverviewUpdate) {
            window.renderChessOverviewUpdate();
        }
    } catch (error) {
        console.error('✗ Erro geral ao buscar dados do Chess.com:', error);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchChessData);
} else {
    fetchChessData();
}
