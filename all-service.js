
// All services data
        const allServices = [
            // Home Services
            { name: 'Plumbing Services', icon: '🔧', category: 'home', categoryName: 'Home Services', description: 'Expert plumbing solutions for leaks, installations, pipe repairs, and emergency services.', contact: '+91 9902236917', features: ['24/7 Emergency Service', 'Licensed Plumbers', 'Free Inspection'] },
            { name: 'House Painting', icon: '🎨', category: 'home', categoryName: 'Home Services', description: 'Professional interior and exterior painting with premium quality materials.', contact: '+91 9902236917', features: ['Premium Paints', '2 Year Warranty', 'Furniture Protection'] },
            { name: 'Deep Cleaning', icon: '✨', category: 'home', categoryName: 'Home Services', description: 'Comprehensive house cleaning services with eco-friendly products.', contact: '+919902236917', features: ['Eco-Friendly Products', 'Trained Staff', 'Equipment Provided'] },
            { name: 'Pest Control', icon: '🐛', category: 'home', categoryName: 'Home Services', description: 'Safe and effective pest control solutions for your home.', contact: '+91 9902236917', features: ['Safe Chemicals', 'Certified Technicians', '3 Months Warranty'] },
            { name: 'Carpentry Works', icon: '🪚', category: 'home', categoryName: 'Home Services', description: 'Custom furniture and carpentry solutions for your home.', contact: '+91 9902236917', features: ['Custom Designs', 'Quality Wood', 'Installation Included'] },
            { name: 'Home Appliance Repair', icon: '🔌', category: 'home', categoryName: 'Home Services', description: 'Repair services for all home appliances - washing machines, refrigerators, etc.', contact: '+91 9902236917', features: ['All Brands Covered', 'Same Day Service', 'Genuine Parts'] },
            { name: 'Masonry & Brickwork', icon: '🧱', description: 'Professional masonry services including brickwork, cement work, wall construction, and plastering.', contact: '+91 98765-43232',features: ['Wall Construction & Repair', 'Plastering & Cement Work', 'Brick Laying', 'Experienced Masons']},
            
            // Wedding Services
            { name: 'Wedding Photography', icon: '📸', category: 'wedding', categoryName: 'Wedding Services', description: 'Smartify offers wireless and wired home automation solutions from premium brands, with personalized setup.', contact: '+91 9902236917', features: ['Automated Lighting', 'Smart Thermostats', 'Smart-automated door systems'] },
            { name: 'Wedding Catering', icon: '🍽️', category: 'wedding', categoryName: 'Wedding Services', description: 'Delicious multi-cuisine catering services for your wedding.', contact: '+91 9902236917', features: ['Multi-Cuisine Options', 'Live Counters', 'Professional Staff'] },
            { name: 'Wedding Decoration', icon: '🎉', category: 'wedding', categoryName: 'Wedding Services', description: 'Beautiful and customized decoration for your wedding venue.', contact: '+91 9902236917', features: ['Custom Themes', 'Stage Setup', 'Lighting & Flowers'] },
            { name: 'Wedding Planning', icon: '📋', category: 'wedding', categoryName: 'Wedding Services', description: 'Complete wedding planning and coordination services.', contact: '+91 9902236917', features: ['Full Event Management', 'Vendor Coordination', 'Budget Planning'] },
            { name: 'Bridal Makeup', icon: '💄', category: 'wedding', categoryName: 'Wedding Services', description: 'Professional bridal makeup and hairstyling services.', contact: '+91 9902236917', features: ['Bridal & Groom Makeup', 'Trial Session', 'Premium Products'] },
            { name: 'Wedding DJ & Music', icon: '🎵', category: 'wedding', categoryName: 'Wedding Services', description: 'Professional DJ and music services for your wedding celebrations.', contact: '+91 9902236917', features: ['Professional Equipment', 'Custom Playlist', 'Live Mixing'] },
            
            // Repair & Maintenance
            { name: 'Home automation services ', icon: '💻', category: 'repair', categoryName: 'Repair & Maintenance', description: 'Hardware and software repairs for laptops and computers.', contact: '+91 9902236917', features: ['Hardware & Software', 'Data Recovery', 'Virus Removal'] },
            { name: 'AC Repair & Service', icon: '❄️', category: 'repair', categoryName: 'Repair & Maintenance', description: 'Complete AC installation, repair, and maintenance services.', contact: '+91 9902236917', features: ['All Brands Covered', 'Same Day Service', 'Gas Filling'] },
            { name: 'Electrical Services', icon: '⚡', category: 'repair', categoryName: 'Repair & Maintenance', description: 'Licensed electricians for all electrical work and repairs.', contact: '+91 9902236917', features: ['Certified Electricians', 'Safety Guaranteed', 'Emergency Service'] },
            { name: 'Geyser Repair', icon: '🚿', category: 'repair', categoryName: 'Repair & Maintenance', description: 'Installation and repair of water heaters and geysers.', contact: '+91 9902236917', features: ['All Types', 'Element Replacement', 'Thermostat Repair'] },
            { name: 'RO Water Purifier Service', icon: '💧', category: 'repair', categoryName: 'Repair & Maintenance', description: 'RO installation, repair, and annual maintenance services.', contact: '+91 9902236917', features: ['Filter Replacement', 'All Brands', 'AMC Available'] },

            // Smart Home & Automation
           { name: 'Automatic Gate Installation',icon: '🚧',  category: 'automation',  categoryName: 'Smart Home & Automation', description: 'Motorized gate setups for sliding and swing gates with remote access.', contact: '+91 9902236917', features: ['Remote & App Access', 'Safety Sensors', 'Heavy-Duty Motors']},
           { name: 'Smart Light Integration',  icon: '💡', category: 'automation',  categoryName: 'Smart Home & Automation',  description: 'Automated lighting systems controlled via voice, app, or motion sensors.',  contact: '+91 9902236917',  features: ['App & Voice Control', 'Energy Efficient', 'Custom Ambience'] },
           { name: 'Smart Door & Anti-Theft System', icon: '🔐', category: 'automation', categoryName: 'Smart Home & Automation', description: 'Advanced biometric locks and smart theft authentication security systems.', contact: '+91 9902236917', features: ['Biometric & RFID Access', 'Intruder Alerts', '24/7 Monitoring'] }    
        ];

        let currentFilter = 'all';

        // Load all services
        function loadServices(filter = 'all') {
            const grid = document.getElementById('servicesGrid');
            const filteredServices = filter === 'all' 
                ? allServices 
                : allServices.filter(s => s.category === filter);

            grid.innerHTML = filteredServices.map((service, index) => `
                <div class="service-card" style="animation: fadeInUp 0.6s ease ${index * 0.05}s backwards;">
                    <div class="service-header">
                        <span class="service-icon">${service.icon}</span>
                        <div class="service-info">
                            <h3>${service.name}</h3>
                            <span class="service-category">${service.categoryName}</span>
                        </div>
                    </div>
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

        // Filter services
        function filterServices(category) {
            currentFilter = category;
            
            // Update active tab
            document.querySelectorAll('.filter-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');
            
            loadServices(category);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => loadServices());
