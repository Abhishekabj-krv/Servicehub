        // Service categories data
        const categoryData = {
            home: {
                name: 'Home Services',
                icon: '🏠',
                description: 'Professional home services at your doorstep',
                services: [
                    {
                        name: 'Plumbing Services',
                        icon: '🔧',
                        description: 'Expert plumbing solutions for leaks, installations, pipe repairs, and emergency services.',
                        contact: '+91 9902236917',
                        features: ['24/7 Emergency Service', 'Licensed Plumbers', 'Free Inspection', 'All Types of Repairs']
                    },
                    {
                        name: 'House Painting',
                        icon: '🎨',
                        description: 'Professional interior and exterior painting with premium quality materials.',
                        contact: '+91 9902236917',
                        features: ['Premium Paints', '2 Year Warranty', 'Furniture Protection', 'Color Consultation']
                    },
                    {
                        name: 'Deep Cleaning',
                        icon: '✨',
                        description: 'Comprehensive house cleaning services with eco-friendly products.',
                        contact: '+91 9902236917',
                        features: ['Eco-Friendly Products', 'Trained Staff', 'Equipment Provided', 'Kitchen & Bathroom Deep Clean']
                    },
                    {
                        name: 'Pest Control',
                        icon: '🐛',
                        description: 'Safe and effective pest control solutions for your home.',
                        contact: '+91 9902236917',
                        features: ['Safe Chemicals', 'Certified Technicians', '3 Months Warranty', 'All Pests Covered']
                    },
                    {
                        name: 'Carpentry Works',
                        icon: '🪚',
                        description: 'Custom furniture and carpentry solutions for your home.',
                        contact: '+91 9902236917',
                        features: ['Custom Designs', 'Quality Wood', 'Installation Included', 'Repair Services']
                    },
                    {
                       name: 'Masonry & Brickwork',
                       icon: '🧱',
                       description: 'Professional masonry services including brickwork, cement work, wall construction, and plastering.',
                       contact: '+91 9902236917',
                       features: ['Wall Construction & Repair', 'Plastering & Cement Work', 'Brick Laying', 'Experienced Masons']
                   },
                    {
                        name: 'Home Appliance Repair',
                        icon: '🔌',
                        description: 'Repair services for all home appliances - washing machines, refrigerators, etc.',
                        contact: '+91 9902236917',
                        features: ['All Brands Covered', 'Same Day Service', 'Genuine Parts', '90 Days Warranty']
                    }
                ]
            },
            wedding: {
                name: 'Wedding Services',
                icon: '💒',
                description: 'Make your special day perfect with our wedding services',
                services: [
                    {
                        name: 'Wedding Photography',
                        icon: '📸',
                        description: 'Professional photography and videography to capture your special moments.',
                        contact: '+91 9902236917',
                        features: ['HD Video & Photos', 'Pre-wedding Shoot', 'Album & Editing', 'Drone Coverage']
                    },
                    {
                        name: 'Wedding Catering',
                        icon: '🍽️',
                        description: 'Delicious multi-cuisine catering services for your wedding.',
                        contact: '+91 9902236917',
                        features: ['Multi-Cuisine Options', 'Live Counters', 'Professional Staff', 'Custom Menus']
                    },
                    {
                        name: 'Wedding Decoration',
                        icon: '🎉',
                        description: 'Beautiful and customized decoration for your wedding venue.',
                        contact: '+91 9902236917',
                        features: ['Custom Themes', 'Stage Setup', 'Lighting & Flowers', 'Complete Venue Decor']
                    },
                    {
                        name: 'Wedding Planning',
                        icon: '📋',
                        description: 'Complete wedding planning and coordination services.',
                        contact: '+91 9902236917',
                        features: ['Full Event Management', 'Vendor Coordination', 'Budget Planning', 'Timeline Management']
                    },
                    {
                        name: 'Bridal Makeup',
                        icon: '💄',
                        description: 'Professional bridal makeup and hairstyling services.',
                        contact: '+91 9902236917',
                        features: ['Bridal & Groom Makeup', 'Trial Session', 'Premium Products', 'On-location Service']
                    },
                    {
                        name: 'Wedding DJ & Music',
                        icon: '🎵',
                        description: 'Professional DJ and music services for your wedding celebrations.',
                        contact: '+91 9902236917',
                        features: ['Professional Equipment', 'Custom Playlist', 'Live Mixing', 'Sound & Lighting']
                    }
                ]
            },
            repair: {
                name: 'Repair & Maintenance',
                icon: '🔧',
                description: 'Expert repair and maintenance services',
                services: [
                    {
                        name: 'AC Repair & Service',
                        icon: '❄️',
                        description: 'Complete AC installation, repair, and maintenance services.',
                        contact: '+91 9902236917',
                        features: ['All Brands Covered', 'Same Day Service', 'Gas Filling', '90 Days Warranty']
                    },
                    {
                        name: 'Electrical Services',
                        icon: '⚡',
                        description: 'Licensed electricians for all electrical work and repairs.',
                        contact: '+91 9902236917',
                        features: ['Certified Electricians', 'Safety Guaranteed', 'Emergency Service', 'Wiring & Repairs']
                    },
                    {
                        name: 'Laptop & Computer Repair',
                        icon: '💻',
                        description: 'Hardware and software repairs for laptops and computers.',
                        contact: '+91 98765-43225',
                        features: ['Hardware & Software', 'Data Recovery', 'Virus Removal', 'Upgrade Services']
                    },
                    {
                        name: 'Geyser Repair',
                        icon: '🚿',
                        description: 'Installation and repair of water heaters and geysers.',
                        contact: '+91 9902236917',
                        features: ['All Types', 'Element Replacement', 'Thermostat Repair', 'Installation Service']
                    },
                    {
                        name: 'RO Water Purifier Service',
                        icon: '💧',
                        description: 'RO installation, repair, and annual maintenance services.',
                        contact: '+91 9902236917',
                        features: ['Filter Replacement', 'All Brands', 'AMC Available', 'Installation & Repair']
                    }
                ]
            },
                automation: {
                name: 'Smart Home & Automation',
                icon: '🤖',
                description: 'Advanced smart home setups and security automation',
                services: [
                    {
                        name: 'Automatic Gate Installation',
                        icon: '🚧',
                        description: 'Motorized gate setups for sliding and swing gates with remote access.',
                        contact: '+91 9902236917',
                        features: ['Remote & App Access', 'Safety Sensors', 'Heavy-Duty Motors', '1-Year Maintenance']
                    },
                    {
                        name: 'Smart Light Integration',
                        icon: '💡',
                        description: 'Automated lighting systems controlled via voice, app, or motion sensors.',
                        contact: '+91 9902236917',
                        features: ['App & Voice Control', 'Energy Efficient', 'Custom Ambience', 'Smart Scheduling']
                    },
                    {
                        name: 'Smart Door & Anti-Theft System',
                        icon: '🔐',
                        description: 'Advanced biometric locks and smart theft authentication security systems.',
                        contact: '+91 9902236917',
                        features: ['Biometric & RFID Access', 'Intruder Alerts', '24/7 Monitoring', 'Battery Backup']
                    }
                ]
            }
        };

        // Get category from URL parameter or default to 'home'
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('category') || 'home';

        // Load category data
        function loadCategory() {
            const category = categoryData[categoryId];
            if (!category) {
                window.location.href = 'index.html';
                return;
            }

            // Update header
            document.getElementById('categoryIcon').textContent = category.icon;
            document.getElementById('categoryName').textContent = category.name;
            document.getElementById('categoryDescription').textContent = category.description;
            document.title = `${category.name} - ServiceHub`;

            // Load services
            const grid = document.getElementById('servicesGrid');
            grid.innerHTML = category.services.map((service, index) => `
                <div class="service-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards;">
                    <span class="service-icon">${service.icon}</span>
                    <h3>${service.name}</h3>
                    <p class="service-description">${service.description}</p>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <button class="call-btn" onclick="window.location.href='tel:${service.contact}'">
                        📞 Call Now
                    </button>
                </div>
            `).join('');
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', loadCategory);

        // Animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

