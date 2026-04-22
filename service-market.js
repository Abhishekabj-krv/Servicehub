        const categories = [
            {
                id: 'home',
                name: 'Home Services',
                icon: '🏠',
                description: 'Plumbing, cleaning, painting, and more',
                count: 10
            },
            {
                id: 'wedding',
                name: 'Wedding Services',
                icon: '💒',
                description: 'Catering, photography, decoration',
                count: 10
            },
            {
                id: 'repair',
                name: 'Repair & Maintenance',
                icon: '🔧',
                description: 'AC, appliances, electrical work',
                count: 5
            },
          {
                id: 'automation',
                name: 'Smart Home & Automation',
                icon: '🤖',
                description: 'Smart gates, lighting, security locks',
                count: 3
            }
        ];

        const services = [
            {
                id: 1,
                name: 'Expert Plumbing Services',
                category: 'home',
                icon: '🔧',
                features: ['24/7 Emergency Service', 'Licensed & Insured', 'Free Inspection'],
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            },
            {
                id: 2,
                name: 'Automatic Gate Installation',
                category: 'automation',
                icon: '🚧',
                features: ['Remote & App Access', 'Heavy-Duty Motors', '1-Year Maintenance'],
                gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' // Warm mechanical orange/yellow
            },
            {
                id: 3,
                name: 'Professional Painting',
                 category: 'home',
                icon: '🎨',
                features: ['Premium Quality Paint', '2 Year Warranty', 'Furniture Protection'],
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            },
            {
                id:4,
                name: 'Wedding Photography',
                category: 'wedding',
                icon: '📸',
                features: ['Full HD Video', 'Pre-wedding Shoot', 'Album Included'],
                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            },
            {
                id: 5,
                name: 'Smart Door & Anti-Theft System',
                category: 'automation',
                icon: '🔐',
                features: ['Biometric & RFID Access', 'Intruder Alerts', '24/7 Monitoring'],
                gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' // Premium soft purple/pink
            },
            {
                id: 6,
                name: 'Wedding Catering',
                category: 'wedding',
                icon: '🍽️',
                features: ['Multi-Cuisine Options', 'Live Counters', 'Professional Staff'],
                gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
            },
            {
                id: 7,
                name: 'AC Repair & Service',
                category: 'repair',
                icon: '❄️',
                features: ['Same Day Service', 'All Brands Covered', '90 Days Warranty'],
                gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
            },
            {
                id: 8,
                name: 'Electrical Services',
                category: 'repair',
                icon: '⚡',
                features: ['Certified Electricians', 'Safety Guaranteed', 'Quick Response'],
                gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
            },
            {
                id: 9,
                name: 'Deep House Cleaning',
                category: 'home',
                icon: '✨',
                features: ['Eco-Friendly Products', 'Trained Staff', 'Equipment Provided'],
                gradient: 'linear-gradient(135deg, #fdeb71 0%, #f8d800 100%)'
            },
            {
                id: 10,
                name: 'Wedding Decoration',
                category: 'wedding',
                icon: '🎉',
                features: ['Custom Themes', 'Stage Setup', 'Lighting Included'],
                gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
            },
            
            {
                id: 11,
                name: 'Smart Light Integration',
                category: 'automation',
                icon: '💡',
                features: ['App & Voice Control', 'Custom Ambience', 'Smart Scheduling'],
                gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' // Bright neon green/blue
            }
        ];

        let currentFilter = 'all';

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadCategories();
            loadFilterButtons();
            loadServices();
        });

        // Open Category Page
        function openCategoryPage(categoryId) {
            // Navigate to category page with the selected category
            window.location.href = `category-page.html?category=${categoryId}`;
        }

        // Call Service
        function callService(phoneNumber) {
            // Open phone dialer
            window.location.href = `tel:${phoneNumber}`;
        }

        // Load Categories
        function loadCategories() {
            const grid = document.getElementById('categoriesGrid');
            grid.innerHTML = categories.map((cat, index) => `
                <div class="category-card" onclick="openCategoryPage('${cat.id}')" style="animation-delay: ${index * 0.1}s">
                    <span class="category-icon">${cat.icon}</span>
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                    <span class="service-count">${cat.count} Services</span>
                </div>
            `).join('');
        }

        // Load Filter Buttons
        function loadFilterButtons() {
            const container = document.getElementById('filterButtons');
            const filters = [
                { id: 'all', name: 'All Services' },
                ...categories.map(cat => ({ id: cat.id, name: cat.name }))
            ];
            
            container.innerHTML = filters.map(filter => `
                <button class="filter-btn ${filter.id === 'all' ? 'active' : ''}" 
                        onclick="filterByCategory('${filter.id}')">
                    ${filter.name}
                </button>
            `).join('');
        }

        // Load Services
        function loadServices(filter = 'all') {
            const grid = document.getElementById('servicesGrid');
            const filteredServices = filter === 'all' 
                ? services 
                : services.filter(s => s.category === filter);

            if (filteredServices.length === 0) {
                grid.innerHTML = '<div class="loading"><p>No services found in this category.</p></div>';
                return;
            }

            grid.innerHTML = filteredServices.map((service, index) => `
                <div class="service-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards;">
                    <div class="service-image" style="background: ${service.gradient}">
                        <span style="font-size: 5rem; position: relative; z-index: 1;">${service.icon}</span>
                    </div>
                    <div class="service-content">
                        <div class="service-header">
                            <div>
                                <h3>${service.name}</h3>
                                <span class="service-category">${getCategoryName(service.category)}</span>
                            </div>
                        </div>
                        <ul class="service-features">
                            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }

        // Filter by Category
        function filterByCategory(categoryId) {
            currentFilter = categoryId;
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Load filtered services
            loadServices(categoryId);
            
            // Scroll to services section
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }

        // Search Services
        function searchServices() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const category = document.getElementById('categoryFilter').value;
            
            if (searchTerm || category !== 'all') {
                filterByCategory(category);
                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Get Category Name
        function getCategoryName(categoryId) {
            const category = categories.find(c => c.id === categoryId);
            return category ? category.name : categoryId;
        }

        // Open Booking Modal
        function openBookingModal(serviceName) {
            document.getElementById('modalServiceName').textContent = serviceName;
            document.getElementById('bookingModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close Modal
        function closeModal() {
            document.getElementById('bookingModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Submit Booking
        function submitBooking(event) {
            event.preventDefault();
            alert('🎉 Booking request submitted! Our team will contact you shortly.');
            closeModal();
            event.target.reset();
        }

        // Close modal on outside click
        document.getElementById('bookingModal').addEventListener('click', (e) => {
            if (e.target.id === 'bookingModal') {
                closeModal();
            }
        });

    
