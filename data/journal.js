const journal = [
    // January
    { month: 0, day: 1, highlight: "Started the new year with fresh goals. Excited to build something meaningful." },
    { month: 0, day: 2, highlight: "Worked on the blog structure. Simplified navigation." },
    { month: 0, day: 3, highlight: "Fixed dark mode toggle. Now working smoothly." },
    { month: 0, day: 5, highlight: "Added articles section. Created first batch of content." },
    { month: 0, day: 8, highlight: "Spent most of today simplifying the site structure. Interesting how removing things takes more time." },
    { month: 0, day: 10, highlight: "Launched thoughts section. Quick, Twitter-like updates." },
    { month: 0, day: 12, highlight: "Journal layout redesigned as a calendar view." },
    { month: 0, day: 15, highlight: "Hit 100 visitors! Small milestone but motivating." },
    { month: 0, day: 18, highlight: "Implemented responsive design. Works great on mobile." },
    { month: 0, day: 20, highlight: "Added projects showcase. Highlighting recent work." },
    { month: 0, day: 22, highlight: "Wrote comprehensive DevOps article. Deep dive into CI/CD." },
    { month: 0, day: 25, highlight: "Refactored CSS. Code is cleaner and more maintainable." },
    { month: 0, day: 28, highlight: "Completed reading 3 books this month. Learning never stops." },
    
    // February
    { month: 1, day: 3, highlight: "Started learning Kubernetes. Complex but powerful." },
    { month: 1, day: 7, highlight: "Built my first containerized application with Docker." },
    { month: 1, day: 10, highlight: "Deployed to cloud for the first time. Nervous but excited." },
    { month: 1, day: 14, highlight: "Valentine's day. Spent it debugging code instead. No regrets." },
    { month: 1, day: 18, highlight: "Completed Kubernetes certification course." },
    { month: 1, day: 22, highlight: "Contributed to open source project. First PR merged!" },
    { month: 1, day: 26, highlight: "Finished February strong. Month of learning and growth." },
    
    // March
    { month: 2, day: 5, highlight: "Started cybersecurity course. Fascinating field." },
    { month: 2, day: 10, highlight: "Learned about OWASP Top 10 vulnerabilities." },
    { month: 2, day: 15, highlight: "Implemented security best practices in my projects." },
    { month: 2, day: 20, highlight: "Passed security fundamentals exam with flying colors." },
    { month: 2, day: 25, highlight: "March progress: Stronger in security mindset." },
    { month: 2, day: 30, highlight: "End of month reflection. Growth feels exponential." },
    
    // April
    { month: 3, day: 2, highlight: "Started blogging about my learning journey." },
    { month: 3, day: 8, highlight: "Published first article on DevOps best practices." },
    { month: 3, day: 12, highlight: "Reached 500 blog views. Community engagement growing." },
    { month: 3, day: 18, highlight: "Started mentoring junior developers. Teaching reinforces learning." },
    { month: 3, day: 24, highlight: "April checkpoint: Focus shifting to teaching others." },
    { month: 3, day: 29, highlight: "Month of sharing knowledge. Fulfilling experience." },
    
    // May
    { month: 4, day: 3, highlight: "Began working on side project with friends." },
    { month: 4, day: 10, highlight: "First team sprint completed successfully." },
    { month: 4, day: 15, highlight: "Implemented CI/CD pipeline for the team." },
    { month: 4, day: 20, highlight: "Project gaining traction. Users starting to sign up." },
    { month: 4, day: 25, highlight: "May reflection: Collaboration is powerful." },
    { month: 4, day: 31, highlight: "End of May. Project momentum building strong." },
    
    // June
    { month: 5, day: 5, highlight: "Summer started. Picking up pace on all fronts." },
    { month: 5, day: 10, highlight: "Spoke at local tech meetup. First public speaking experience." },
    { month: 5, day: 15, highlight: "Feedback from presentation was overwhelmingly positive." },
    { month: 5, day: 20, highlight: "Started working on advanced architecture patterns." },
    { month: 5, day: 25, highlight: "June milestone: Became more confident in my abilities." },
    { month: 5, day: 30, highlight: "End of June. Ready for the second half of the year." },
    
    // July
    { month: 6, day: 4, highlight: "Started deep dive into system design." },
    { month: 6, day: 9, highlight: "Designed scalable architecture for the project." },
    { month: 6, day: 14, highlight: "Implemented microservices. Complexity but flexibility gained." },
    { month: 6, day: 19, highlight: "Handled major refactoring. Team worked great together." },
    { month: 6, day: 24, highlight: "July progress: System now handles 10x more load." },
    { month: 6, day: 30, highlight: "End of July. Architecture is now production-ready." },
    
    // August
    { month: 7, day: 3, highlight: "Started documenting everything. Better late than never." },
    { month: 7, day: 8, highlight: "Completed comprehensive API documentation." },
    { month: 7, day: 13, highlight: "Created video tutorials for the project." },
    { month: 7, day: 18, highlight: "Community contributing more actively. Great to see." },
    { month: 7, day: 23, highlight: "August checkpoint: Documentation saves so much time." },
    { month: 7, day: 29, highlight: "End of August. Project is truly scalable now." },
    
    // September
    { month: 8, day: 2, highlight: "Fall season. New energy to tackle challenges." },
    { month: 8, day: 7, highlight: "Started advanced security audit of our system." },
    { month: 8, day: 12, highlight: "Fixed several critical security vulnerabilities." },
    { month: 8, day: 17, highlight: "Implemented advanced monitoring and alerting." },
    { month: 8, day: 22, highlight: "September progress: System is now bulletproof." },
    { month: 8, day: 27, highlight: "End of September. Ready for production launch." },
    
    // October
    { month: 9, day: 1, highlight: "October arrived. Time to celebrate wins so far." },
    { month: 9, day: 6, highlight: "Launched beta version. First real users onboarded." },
    { month: 9, day: 11, highlight: "User feedback invaluable. Making quick iterations." },
    { month: 9, day: 16, highlight: "Hit first paying customer. Surreal moment." },
    { month: 9, day: 21, highlight: "October milestone: Business side starting to work." },
    { month: 9, day: 28, highlight: "End of October. Project becoming real business." },
    
    // November
    { month: 10, day: 3, highlight: "November focus: Scaling operations and support." },
    { month: 10, day: 8, highlight: "Hired first team member. Delegation feels good." },
    { month: 10, day: 13, highlight: "Built customer support system. Importance of UX." },
    { month: 10, day: 18, highlight: "Thanksgiving prep. Grateful for journey so far." },
    { month: 10, day: 23, highlight: "November progress: Team growing, customers happy." },
    { month: 10, day: 29, highlight: "End of November. Ready to finish strong." },
    
    // December
    { month: 11, day: 2, highlight: "December sprint. Final push before year end." },
    { month: 11, day: 7, highlight: "Year-end review meeting. Reflecting on growth." },
    { month: 11, day: 12, highlight: "Celebrated team wins. Amazing year of learning." },
    { month: 11, day: 17, highlight: "Started planning for next year. Dreams getting bigger." },
    { month: 11, day: 22, highlight: "December check: Surpassed all goals for the year." },
    { month: 11, day: 27, highlight: "Year-end. Ready to close this chapter and start new one." }
];
