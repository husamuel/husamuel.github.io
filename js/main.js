// Navegação entre seções
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Mostra a secção correspondente (procura por .page ou .section)
function showSection(sectionId) {
    const allSections = Array.from(document.querySelectorAll('.page, .section'));
    if (allSections.length === 0) return;

    allSections.forEach(s => s.classList.remove('active'));

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    } else {
        // fallback: se não existir essa secção, mostra a primeira
        const first = allSections[0];
        if (first) first.classList.add('active');
    }

    // Atualizar classes ativas no nav
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => {
        const sec = l.getAttribute('data-section') || l.getAttribute('href').replace('#', '');
        if (sec === sectionId) l.classList.add('active');
        else l.classList.remove('active');
    });
}

// Delegação de eventos para links de navegação (trata cliques e atualiza hash)
document.addEventListener('click', function(e) {
    const link = e.target.closest('.nav-link, .back-link');
    if (!link) return;

    e.preventDefault();
    const targetSection = link.getAttribute('data-section');
    if (!targetSection) return;

    // Atualiza o path/hash sem recarregar (gera histórico)
    const newPath = targetSection === 'home' ? '/' : `/#${targetSection}`;
    history.pushState({section: targetSection}, '', newPath);
    showSection(targetSection);
});

// Listener para botões voltar/avançar do browser
window.addEventListener('popstate', function(e) {
    let section = 'home';
    if (e.state && e.state.section) {
        section = e.state.section;
    } else if (window.location.hash) {
        section = window.location.hash.replace('#', '');
    }
    showSection(section);
});

// Renderizar Artigos (compatível com id 'artigos' ou 'articles')
function renderArticles() {
    const container = document.getElementById('artigos') || document.getElementById('articles');
    
    if (!container) {
        console.error('Container de artigos não encontrado');
        return;
    }
    
    container.innerHTML = '';
    
    // Adiciona o back-link no topo
    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);
    
    if (typeof articles === 'undefined' || !Array.isArray(articles)) {
        // nada a renderizar por enquanto
        return;
    }
    
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'article';
        
        articleElement.innerHTML = `
            <div class="article-header">
                <span class="arrow">→</span>
                <h2>${article.title}</h2>
                <div class="article-date">${article.date || ''}</div>
            </div>
            <div class="article-content">
                <div class="article-content-inner">
                    ${article.content || ''}
                </div>
            </div>
        `;
        
        // Adicionar evento de clique ANTES de adicionar ao DOM
        const header = articleElement.querySelector('.article-header');
        if (header) {
            header.addEventListener('click', () => {
                articleElement.classList.toggle('expanded');
            });
        }
        
        container.appendChild(articleElement);
    });
}

// Renderizar Projetos (compatível com id 'projetos' ou 'projects')
function renderProjects() {
    const container = document.getElementById('projetos') || document.getElementById('projects');
    
    if (!container) {
        console.error('Container de projetos não encontrado');
        return;
    }
    
    container.innerHTML = '';
    
    // Adiciona o back-link no topo
    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);
    
    if (typeof projects === 'undefined' || !Array.isArray(projects)) {
        // nada a renderizar por enquanto
        return;
    }
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        
        const tagsHTML = Array.isArray(project.tags) ? project.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('') : '';
        
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description || ''}</p>
            <div class="project-tags">
                ${tagsHTML}
            </div>
        `;
        
        container.appendChild(projectElement);
    });
}

// Renderizar conteúdo genérico (thoughts, journal, etc.)
function renderGenericSection(containerId, dataArray) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        return;
    }
    
    container.innerHTML = '';
    
    // Adiciona o back-link no topo
    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);
    
    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        return;
    }
    
    dataArray.forEach(item => {
        const itemElement = document.createElement('article');
        itemElement.className = 'article';
        
        itemElement.innerHTML = `
            <div class="article-header">
                <span class="arrow">→</span>
                <h2>${item.title}</h2>
                <div class="article-date">${item.date || ''}</div>
            </div>
            <div class="article-content">
                <div class="article-content-inner">
                    ${item.content || ''}
                </div>
            </div>
        `;
        
        const header = itemElement.querySelector('.article-header');
        if (header) {
            header.addEventListener('click', () => {
                itemElement.classList.toggle('expanded');
            });
        }
        
        container.appendChild(itemElement);
    });
}

// Renderizar Thoughts (formato simples com data e conteúdo)
function renderThoughts(containerId, dataArray) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        return;
    }
    
    container.innerHTML = '';
    
    // Adiciona o back-link no topo
    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);
    
    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        return;
    }
    
    dataArray.forEach(thought => {
        const entryElement = document.createElement('div');
        entryElement.className = 'journal-entry';
        
        entryElement.innerHTML = `
            <div class="journal-date">${thought.date}</div>
            <p class="journal-content">${thought.content}</p>
        `;
        
        container.appendChild(entryElement);
    });
}

// Renderizar Journal (layout de calendário vertical com múltiplos meses)
function renderJournal(containerId, dataArray) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        return;
    }
    
    container.innerHTML = '';
    
    // Adiciona o back-link no topo
    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Criar seletor de meses
    const selectorDiv = document.createElement('div');
    selectorDiv.className = 'month-selector';
    
    months.forEach((month, index) => {
        const btn = document.createElement('button');
        btn.className = 'month-btn' + (index === 0 ? ' active' : '');
        btn.textContent = month;
        btn.setAttribute('data-month', index);
        btn.addEventListener('click', function() {
            document.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.calendar-month-container').forEach(c => c.classList.remove('active'));
            document.querySelector(`[data-month-container="${index}"]`).classList.add('active');
        });
        selectorDiv.appendChild(btn);
    });
    
    container.appendChild(selectorDiv);
    
    // Criar container para cada mês
    const monthsContainer = document.createElement('div');
    monthsContainer.className = 'months-wrapper';
    
    months.forEach((month, monthIndex) => {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'calendar-month-container' + (monthIndex === 0 ? ' active' : '');
        monthDiv.setAttribute('data-month-container', monthIndex);
        
        const monthTitle = document.createElement('h2');
        monthTitle.className = 'calendar-month';
        monthTitle.textContent = month + ' 2026';
        monthDiv.appendChild(monthTitle);
        
        // Filtrar dados do mês
        const monthEntries = dataArray.filter(entry => entry.month === monthIndex);
        
        // Criar mapa de dias
        const highlightMap = {};
        monthEntries.forEach(entry => {
            highlightMap[entry.day] = entry.highlight;
        });
        
        // Dias do mês
        const daysInMonth = new Date(2026, monthIndex + 1, 0).getDate();
        
        const calendarDiv = document.createElement('div');
        calendarDiv.className = 'calendar-vertical';
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day-vertical';
            
            if (highlightMap[day]) {
                dayEl.classList.add('has-entry');
                dayEl.innerHTML = `
                    <div class="calendar-day-left">
                        <div class="calendar-day-number">${day}</div>
                    </div>
                    <div class="calendar-day-right">
                        <p class="calendar-day-highlight">${highlightMap[day]}</p>
                    </div>
                `;
            } else {
                dayEl.innerHTML = `
                    <div class="calendar-day-left">
                        <div class="calendar-day-number">${day}</div>
                    </div>
                `;
            }
            
            calendarDiv.appendChild(dayEl);
        }
        
        monthDiv.appendChild(calendarDiv);
        monthsContainer.appendChild(monthDiv);
    });
    
    container.appendChild(monthsContainer);
}

// Renderizar Photos (grid 2 colunas, vertical)
function renderPhotos(containerId, photosArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    // back-link no topo
    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    // grid de fotos
    const grid = document.createElement('div');
    grid.className = 'photos-grid';

    if (!Array.isArray(photosArray) || photosArray.length === 0) {
        // placeholder simples quando não há fotos
        const empty = document.createElement('div');
        empty.className = 'photos-empty';
        empty.textContent = 'Ainda sem fotos. Adicione imagens ao ficheiro data/photos.js';
        grid.appendChild(empty);
    } else {
        photosArray.forEach(p => {
            const item = document.createElement('div');
            item.className = 'photo-item';

            item.innerHTML = `
                <figure>
                    <img src="${p.src}" alt="${p.alt || ''}" loading="lazy">
                    ${p.caption ? `<figcaption>${p.caption}</figcaption>` : ''}
                </figure>
            `;

            grid.appendChild(item);
        });
    }

    container.appendChild(grid);
}

// Renderizar Chess - Overview
function renderChessOverview(containerId, chessData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    const description = document.createElement('p');
    description.className = 'chess-description';
    description.textContent = chessData.description;
    container.appendChild(description);

    // Profile Card
    const profileCard = document.createElement('div');
    profileCard.className = 'chess-profile-card';

    if (chessData.profile.avatar) {
        const avatar = document.createElement('img');
        avatar.src = chessData.profile.avatar;
        avatar.alt = chessData.username;
        avatar.className = 'chess-avatar';
        profileCard.appendChild(avatar);
    }

    const profileInfo = document.createElement('div');
    profileInfo.className = 'chess-profile-info';
    profileInfo.innerHTML = `
        <h2>${chessData.username}</h2>
        <p><strong>Member since:</strong> ${chessData.profile.joined || 'N/A'}</p>
        <div class="chess-rating-info">
            <div class="rating-item">
                <span class="rating-label">Rapid (10 min)</span>
                <span class="rating-value">${chessData.profile.rapid10Rating}</span>
                <span class="rating-best">Best: ${chessData.profile.rapid10Best}</span>
            </div>
        </div>
    `;
    profileCard.appendChild(profileInfo);

    container.appendChild(profileCard);

    // Progress Chart (evolução de rating)
    if (chessData.profile.rapid10RatingHistory && chessData.profile.rapid10RatingHistory.length > 0) {
        const progressDiv = document.createElement('div');
        progressDiv.className = 'chess-progress-chart';

        const progressTitle = document.createElement('h3');
        progressTitle.textContent = 'Rating Evolution Over Time';
        progressDiv.appendChild(progressTitle);

        const chartContainer = document.createElement('div');
        chartContainer.className = 'chess-mini-chart';

        // Encontrar min e max rating para escalar o gráfico
        const ratings = chessData.profile.rapid10RatingHistory.map(entry => entry[2]);
        const minRating = Math.min(...ratings);
        const maxRating = Math.max(...ratings);
        const ratingRange = maxRating - minRating || 1;

        chessData.profile.rapid10RatingHistory.forEach(entry => {
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            
            // Escalar a altura baseado no range
            const normalizedHeight = ((entry[2] - minRating) / ratingRange) * 100;
            bar.style.height = normalizedHeight + '%';
            
            const date = new Date(entry[0] * 1000).toLocaleDateString('pt-PT', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
            bar.title = `${entry[2]} - ${date}`;
            
            // Adicionar label com rating
            bar.innerHTML = `<span class="bar-label">${entry[2]}</span>`;
            chartContainer.appendChild(bar);
        });

        progressDiv.appendChild(chartContainer);

        // Adicionar estatísticas de evolução
        const statsDiv = document.createElement('div');
        statsDiv.className = 'chart-stats';
        
        const firstRating = ratings[0];
        const lastRating = ratings[ratings.length - 1];
        const diff = lastRating - firstRating;
        const diffPercent = ((diff / firstRating) * 100).toFixed(2);
        const trend = diff >= 0 ? '📈' : '📉';

        statsDiv.innerHTML = `
            <div class="stat-item">
                <span>Start:</span>
                <strong>${firstRating}</strong>
            </div>
            <div class="stat-item">
                <span>Current:</span>
                <strong>${lastRating}</strong>
            </div>
            <div class="stat-item">
                <span>Change:</span>
                <strong>${trend} ${diff > 0 ? '+' : ''}${diff} (${diffPercent}%)</strong>
            </div>
        `;
        
        progressDiv.appendChild(statsDiv);
        container.appendChild(progressDiv);
    }

    // Navigation
    const navDiv = document.createElement('div');
    navDiv.className = 'chess-nav';

    const subPages = [
        { id: 'games', label: 'Recent Games' },
        { id: 'analysis', label: 'Analysis' },
        { id: 'positions', label: 'Positions' }
    ];

    subPages.forEach(page => {
        const btn = document.createElement('button');
        btn.className = 'chess-nav-btn';
        btn.textContent = page.label;
        btn.addEventListener('click', () => {
            chess.currentPage = page.id;
            renderChessSubpage(containerId, page.id, chessData);
        });
        navDiv.appendChild(btn);
    });

    container.appendChild(navDiv);
    
    // Guardar função global para atualização
    window.renderChessOverviewUpdate = () => renderChessOverview(containerId, chessData);
}

// Renderizar sub-páginas do Chess
function renderChessSubpage(containerId, pageId, chessData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backBtn = document.createElement('button');
    backBtn.className = 'chess-back-btn';
    backBtn.textContent = '← Back to Chess';
    backBtn.addEventListener('click', () => {
        renderChessOverview(containerId, chessData);
    });
    container.appendChild(backBtn);

    if (pageId === 'games') {
        renderChessGamesPage(container, chessData);
    } else if (pageId === 'analysis') {
        renderChessAnalysisPage(container);
    } else if (pageId === 'positions') {
        renderChessPositionsPage(container);
    }
}

function renderChessGamesPage(container, chessData) {
    const title = document.createElement('h2');
    title.textContent = 'Recent Games';
    container.appendChild(title);

    if (!chessData.games || chessData.games.length === 0) {
        const loading = document.createElement('div');
        loading.textContent = 'Loading games...';
        container.appendChild(loading);
        return;
    }

    const gamesList = document.createElement('div');
    gamesList.className = 'chess-games-list';

    chessData.games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = `chess-game-item result-${game.result.toLowerCase()}`;
        
        // Gerar imagem do tabuleiro a partir do PGN
        const boardImage = `https://www.chess.com/dynboard?fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR%20w%20KQkq%20-%200%201&board=green&coordinates=true&size=200`;
        
        gameDiv.innerHTML = `
            <div class="game-image">
                <img src="${boardImage}" alt="Game position" loading="lazy">
            </div>
            <div class="game-content">
                <div class="game-result-badge">${game.result}</div>
                <div class="game-details">
                    <div class="game-opponent">vs ${game.opponent}</div>
                    <div class="game-rating">${game.myRating} → ${game.opponentRating}</div>
                    <div class="game-info">${game.timeControl} • ${game.endTime}</div>
                </div>
                <a href="${game.url}" target="_blank" rel="noopener noreferrer" class="game-link">View Full Game</a>
            </div>
        `;
        gamesList.appendChild(gameDiv);
    });

    container.appendChild(gamesList);

    // Store function globally
    window.renderChessGames = () => renderChessGamesPage(container, chessData);
}

function renderChessAnalysisPage(container) {
    const title = document.createElement('h2');
    title.textContent = 'Game Analysis';
    container.appendChild(title);

    if (typeof chessAnalysis === 'undefined' || chessAnalysis.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No analyses yet.';
        container.appendChild(empty);
        return;
    }

    const analysisList = document.createElement('div');
    analysisList.className = 'chess-analysis-list';

    chessAnalysis.forEach(analysis => {
        const item = document.createElement('article');
        item.className = 'chess-analysis-item';
        item.innerHTML = `
            <h3>${analysis.title}</h3>
            <div class="analysis-meta">${analysis.date} vs ${analysis.opponent}</div>
            <p>${analysis.content}</p>
        `;
        analysisList.appendChild(item);
    });

    container.appendChild(analysisList);
}

function renderChessPositionsPage(container) {
    const title = document.createElement('h2');
    title.textContent = 'Interesting Positions';
    container.appendChild(title);

    if (typeof chessPositions === 'undefined' || chessPositions.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No positions saved yet.';
        container.appendChild(empty);
        return;
    }

    const positionsList = document.createElement('div');
    positionsList.className = 'chess-positions-list';

    chessPositions.forEach(pos => {
        const item = document.createElement('article');
        item.className = 'chess-position-item';
        item.innerHTML = `
            <div class="position-image">
                <img src="${pos.image}" alt="${pos.title}" loading="lazy">
            </div>
            <div class="position-content">
                <h3>${pos.title}</h3>
                <div class="position-meta">${pos.date}</div>
                <p>${pos.description}</p>
                <div class="position-moves"><strong>Key moves:</strong> ${pos.moveSequence}</div>
                <div class="position-fen"><small>FEN: ${pos.fen}</small></div>
            </div>
        `;
        positionsList.appendChild(item);
    });

    container.appendChild(positionsList);
}

// Renderizar Chess (chama overview por padrão)
function renderChess(containerId, chessData) {
    renderChessOverview(containerId, chessData);
}

// Renderizar Reading (livros completed - minimalista)
function renderReading(containerId, readingArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    if (!Array.isArray(readingArray) || readingArray.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No books yet.';
        container.appendChild(empty);
        return;
    }

    const completed = readingArray.filter(b => b.status === 'completed');

    if (completed.length > 0) {
        const grid = document.createElement('div');
        grid.className = 'books-grid-minimal';

        completed.forEach(book => {
            const item = document.createElement('div');
            item.className = 'book-minimal';

            item.innerHTML = `
                <img src="${book.cover}" alt="${book.title}" loading="lazy">
                <h3>${book.title}</h3>
                <p class="book-review-minimal">${book.review}</p>
            `;

            grid.appendChild(item);
        });

        container.appendChild(grid);
    }
}

// Renderizar Quotes (citações)
function renderQuotes(containerId, quotesArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    if (!Array.isArray(quotesArray) || quotesArray.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No quotes yet.';
        container.appendChild(empty);
        return;
    }

    const quotesList = document.createElement('div');
    quotesList.className = 'quotes-list';

    quotesArray.forEach(quote => {
        const item = document.createElement('div');
        item.className = 'quote-item';

        item.innerHTML = `
            <blockquote class="quote-text">"${quote.text}"</blockquote>
            <p class="quote-author">— ${quote.author}</p>
        `;

        quotesList.appendChild(item);
    });

    container.appendChild(quotesList);
}

// Renderizar Timeline (eventos importantes)
function renderTimeline(containerId, timelineArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    if (!Array.isArray(timelineArray) || timelineArray.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No timeline events yet.';
        container.appendChild(empty);
        return;
    }

    const timelineList = document.createElement('div');
    timelineList.className = 'timeline-list';

    timelineArray.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        timelineItem.innerHTML = `
            <div class="timeline-marker">
                <div class="timeline-icon"></div>
                <div class="timeline-line" ${index === timelineArray.length - 1 ? 'style="display: none;"' : ''}></div>
            </div>
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-title">${item.title}</div>
            </div>
        `;

        timelineList.appendChild(timelineItem);
    });

    container.appendChild(timelineList);
}

// Renderizar Tools (ferramentas DevOps)
function renderTools(containerId, toolsArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    if (!Array.isArray(toolsArray) || toolsArray.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No tools yet.';
        container.appendChild(empty);
        return;
    }

    const toolsList = document.createElement('div');
    toolsList.className = 'tools-list';

    toolsArray.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.className = 'tool-item';

        const img = document.createElement('img');
        img.src = tool.icon;
        img.alt = tool.name;
        img.className = 'tool-icon';

        const name = document.createElement('span');
        name.className = 'tool-name';
        name.textContent = tool.name;

        toolItem.appendChild(img);
        toolItem.appendChild(name);

        toolsList.appendChild(toolItem);
    });

    container.appendChild(toolsList);
}

// Renderizar Cluster (documentação técnica)
function renderCluster(containerId, clusterArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    if (!Array.isArray(clusterArray) || clusterArray.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No cluster documentation yet.';
        container.appendChild(empty);
        return;
    }

    // Add cluster photo at top
    if (typeof clusterPhoto !== 'undefined' && clusterPhoto.src) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'cluster-photo';
        
        const fig = document.createElement('figure');
        const img = document.createElement('img');
        img.src = clusterPhoto.src;
        img.alt = clusterPhoto.alt || 'Cluster photo';
        img.loading = 'lazy';
        
        const caption = document.createElement('figcaption');
        caption.textContent = clusterPhoto.caption || '';
        
        fig.appendChild(img);
        fig.appendChild(caption);
        photoDiv.appendChild(fig);
        container.appendChild(photoDiv);
    }

    const clusterContent = document.createElement('div');
    clusterContent.className = 'cluster-content';

    clusterArray.forEach(section => {
        const sectionDiv = document.createElement('section');
        sectionDiv.className = 'cluster-section';

        const title = document.createElement('h2');
        title.textContent = section.title;
        sectionDiv.appendChild(title);

        const content = document.createElement('div');
        content.className = 'cluster-text';
        content.innerHTML = section.content;
        sectionDiv.appendChild(content);

        clusterContent.appendChild(sectionDiv);
    });

    container.appendChild(clusterContent);
}

// Renderizar Contact (página simples sem setas)
function renderContact(containerId, contactArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const backLink = document.createElement('a');
    backLink.href = 'javascript:void(0)';
    backLink.className = 'back-link';
    backLink.setAttribute('data-section', 'home');
    backLink.textContent = '← Back';
    container.appendChild(backLink);

    if (!Array.isArray(contactArray) || contactArray.length === 0) {
        return;
    }

    const contactContent = document.createElement('div');
    contactContent.className = 'contact-content';

    contactArray.forEach(item => {
        const content = document.createElement('div');
        content.className = 'contact-section';
        content.innerHTML = item.content;
        contactContent.appendChild(content);
    });

    container.appendChild(contactContent);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        renderArticles();
        renderProjects();
        renderThoughts('thoughts', typeof thoughts !== 'undefined' ? thoughts : []);
        renderPhotos('photos', typeof photos !== 'undefined' ? photos : []);
        renderJournal('journal', typeof journal !== 'undefined' ? journal : []);
        renderChess('chess', typeof chess !== 'undefined' ? chess : {});
        renderReading('reading', typeof reading !== 'undefined' ? reading : []);
        renderQuotes('quotes', typeof quotes !== 'undefined' ? quotes : []);
        renderTimeline('timeline', typeof timeline !== 'undefined' ? timeline : []);
        renderTools('tools', typeof tools !== 'undefined' ? tools : []);
        renderCluster('cluster', typeof cluster !== 'undefined' ? cluster : []);
        renderGenericSection('ideas', typeof ideas !== 'undefined' ? ideas : []);
        renderContact('contact', typeof contact !== 'undefined' ? contact : []);

        // Roteamento inicial
        let initial = 'home';
        if (window.location.hash) {
            initial = window.location.hash.replace('#', '');
        }
        showSection(initial);

        // Re-aplicar tema após renderização
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }, 100);
});