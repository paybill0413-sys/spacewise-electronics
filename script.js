// ============================================
// PRODUCT CATALOG - All SPACEWISE Products
// ============================================
const PRODUCTS = [
    { id: 'P001', name: 'Vitron 32D', category: 'Televisions', brand: 'Vitron', price: 9500, image: '' },
    { id: 'P002', name: 'Vitron 32S QLED', category: 'Televisions', brand: 'Vitron', price: 11900, image: '' },
    { id: 'P003', name: 'Vitron 43 QLED', category: 'Televisions', brand: 'Vitron', price: 18500, image: '' },
    { id: 'P004', name: 'Hisense 43 A6', category: 'Televisions', brand: 'Hisense', price: 26500, image: '' },
    { id: 'P005', name: 'TCL 43 V6D', category: 'Televisions', brand: 'TCL', price: 29500, image: '' },
    { id: 'P006', name: 'TCL 43 QLED', category: 'Televisions', brand: 'TCL', price: 26000, image: '' },
    { id: 'P007', name: 'TCL 55 V6D', category: 'Televisions', brand: 'TCL', price: 42000, image: '' },
    { id: 'P008', name: 'Vitron V61SB', category: 'Woofers', brand: 'Vitron', price: 6800, image: '' },
    { id: 'P009', name: 'Vitron V51SB', category: 'Woofers', brand: 'Vitron', price: 4700, image: '' },
    { id: 'P010', name: 'Vitron 610', category: 'Woofers', brand: 'Vitron', price: 4500, image: '' },
    { id: 'P011', name: 'Vitron 643', category: 'Woofers', brand: 'Vitron', price: 5000, image: '' },
    { id: 'P012', name: 'Ailyons Karaoke ELP ND600', category: 'Woofers', brand: 'Ailyons', price: 3500, image: '' },
    { id: 'P013', name: 'Globalstar Single', category: 'Fryers', brand: 'Globalstar', price: 3500, image: '' },
    { id: 'P014', name: 'Globalstar Double', category: 'Fryers', brand: 'Globalstar', price: 7500, image: '' },
    { id: 'P015', name: 'Ramtons Pressure Cooker RM/582', category: 'Pressure Cookers', brand: 'Ramtons', price: 8500, image: '' },
    { id: 'P016', name: 'Ailyons Pressure Cooker', category: 'Pressure Cookers', brand: 'Ailyons', price: 5500, image: '' },
    { id: 'P017', name: 'Von Pressure Cooker', category: 'Pressure Cookers', brand: 'Von', price: 8500, image: '' },
    { id: 'P018', name: 'Nunix Air Fryer 8L', category: 'Fryers', brand: 'Nunix', price: 4990, image: '' },
    { id: 'P019', name: 'Eneshower 4T', category: 'Showers', brand: 'Eneshower', price: 1850, image: '' },
    { id: 'P020', name: 'Maxi Ducha', category: 'Showers', brand: 'Maxi', price: 1200, image: '' },
    { id: 'P021', name: 'Ceriotti Super Gek 3000', category: 'Hair Dryers', brand: 'Ceriotti', price: 1700, image: '' },
    { id: 'P022', name: 'Ceriotti Ultra Light 450', category: 'Hair Dryers', brand: 'Ceriotti', price: 3390, image: '' },
    { id: 'P023', name: 'Egg Boiler 14 Eggs', category: 'Kitchen Appliances', brand: 'Generic', price: 1050, image: '' },
    { id: 'P024', name: 'Hand Mixer', category: 'Kitchen Appliances', brand: 'Generic', price: 1100, image: '' },
    { id: 'P025', name: 'Redberry Sandwich Maker', category: 'Kitchen Appliances', brand: 'Redberry', price: 1750, image: '' },
    { id: 'P026', name: 'Edenburg Toaster', category: 'Kitchen Appliances', brand: 'Edenburg', price: 1500, image: '' },
    { id: 'P027', name: 'Smartwatch Square', category: 'Wearables', brand: 'Generic', price: 1450, image: '' },
    { id: 'P028', name: 'Smartwatch Round', category: 'Wearables', brand: 'Generic', price: 1950, image: '' },
    { id: 'P029', name: 'C to C Cable', category: 'Cables', brand: 'Generic', price: 160, image: '' },
    { id: 'P030', name: 'Bosch 10pcs Granite', category: 'Kitchen Appliances', brand: 'Bosch', price: 7490, image: '' },
    { id: 'P031', name: 'Hisense 200W Soundbar', category: 'Soundbars', brand: 'Hisense', price: 0, image: '' },
    { id: 'P032', name: 'Hisense 480W Soundbar', category: 'Soundbars', brand: 'Hisense', price: 0, image: '' },
    { id: 'P033', name: 'Flatpanel Green', category: 'Wall Brackets', brand: 'Flatpanel', price: 300, image: '' },
    { id: 'P034', name: 'Flatpanel 23-63"', category: 'Wall Brackets', brand: 'Flatpanel', price: 550, image: '' },
    { id: 'P035', name: 'Skilltech 40F', category: 'Wall Brackets', brand: 'Skilltech', price: 300, image: '' },
    { id: 'P036', name: 'Skilltech One Arm', category: 'Wall Brackets', brand: 'Skilltech', price: 700, image: '' },
    { id: 'P037', name: 'Skilltech 20T', category: 'Wall Brackets', brand: 'Skilltech', price: 500, image: '' },
    { id: 'P038', name: 'Skilltech 42T', category: 'Wall Brackets', brand: 'Skilltech', price: 700, image: '' },
    { id: 'P039', name: 'Skilltech 44T', category: 'Wall Brackets', brand: 'Skilltech', price: 900, image: '' },
    { id: 'P040', name: 'Home Design Wall Bracket', category: 'Wall Brackets', brand: 'Home Design', price: 950, image: '' },
    { id: 'P041', name: '13 Amps Guard', category: 'Guards', brand: 'Generic', price: 500, image: '' },
    { id: 'P042', name: 'Hisense 20L White', category: 'Microwaves', brand: 'Hisense', price: 8300, image: '' },
    { id: 'P043', name: 'Hisense 20L Silver/Black', category: 'Microwaves', brand: 'Hisense', price: 8500, image: '' },
    { id: 'P044', name: 'Hisense 25L Silver/Black', category: 'Microwaves', brand: 'Hisense', price: 9500, image: '' },
    { id: 'P045', name: 'Hisense 30L Black', category: 'Microwaves', brand: 'Hisense', price: 10500, image: '' },
    { id: 'P046', name: 'Ramtons RM/458', category: 'Microwaves', brand: 'Ramtons', price: 8500, image: '' },
    { id: 'P047', name: 'Roch Digital 20L', category: 'Microwaves', brand: 'Roch', price: 7500, image: '' },
    { id: 'P048', name: 'Primedale Digital 20L', category: 'Microwaves', brand: 'Primedale', price: 7500, image: '' },
    { id: 'P049', name: 'Skywood 60x60 3+1', category: 'Cookers', brand: 'Skywood', price: 23900, image: '' },
    { id: 'P050', name: 'Euroken 50x55 Full Gas', category: 'Cookers', brand: 'Euroken', price: 14990, image: '' },
    { id: 'P051', name: 'TLAC 50x55 3+1 Gas Oven', category: 'Cookers', brand: 'TLAC', price: 21000, image: '' },
    { id: 'P052', name: 'TLAC 60x60 3+1 Gas Sensor', category: 'Cookers', brand: 'TLAC', price: 25000, image: '' },
    { id: 'P053', name: 'Euroken 50x55 3+1 Electric Oven', category: 'Cookers', brand: 'Euroken', price: 16900, image: '' },
    { id: 'P054', name: 'Euroken 50x55 3+1 Shelves', category: 'Cookers', brand: 'Euroken', price: 7500, image: '' },
    { id: 'P055', name: 'Ipcone 2in1 Blender', category: 'Blenders', brand: 'Ipcone', price: 1890, image: '' },
    { id: 'P056', name: 'Silver Crest SC-1589', category: 'Blenders', brand: 'Silver Crest', price: 2190, image: '' },
    { id: 'P057', name: 'Signature Commercial Blender 3L', category: 'Blenders', brand: 'Signature', price: 10990, image: '' },
    { id: 'P058', name: 'Infrared Two Burner', category: 'Burners', brand: 'Generic', price: 2450, image: '' },
    { id: 'P059', name: 'Ailyons Three Burner', category: 'Burners', brand: 'Ailyons', price: 3200, image: '' },
    { id: 'P060', name: 'Alyons Glass Top', category: 'Burners', brand: 'Alyons', price: 2200, image: '' },
    { id: 'P061', name: 'Horse Pipe', category: 'Burners', brand: 'Generic', price: 200, image: '' },
    { id: 'P062', name: '13kgs Regulator', category: 'Burners', brand: 'Generic', price: 400, image: '' },
    { id: 'P063', name: '6kgs Regulator', category: 'Burners', brand: 'Generic', price: 300, image: '' },
    { id: 'P064', name: 'Sonar JY-001', category: 'Dispensers', brand: 'Sonar', price: 2890, image: '' },
    { id: 'P065', name: 'Ailyons AFK 112', category: 'Dispensers', brand: 'Ailyons', price: 5999, image: '' },
    { id: 'P066', name: 'Nunix A1C', category: 'Dispensers', brand: 'Nunix', price: 9499, image: '' },
    { id: 'P067', name: '3M JSB 4WAY', category: 'Extensions', brand: 'JSB', price: 800, image: '' },
    { id: 'P068', name: '5M JSB 6 WAY', category: 'Extensions', brand: 'JSB', price: 1200, image: '' },
    { id: 'P069', name: '5M JSB 4 WAY', category: 'Extensions', brand: 'JSB', price: 1000, image: '' },
    { id: 'P070', name: '3M JSB 4WAY Boxed', category: 'Extensions', brand: 'JSB', price: 900, image: '' },
    { id: 'P071', name: '5M JSB 4WAY Boxed', category: 'Extensions', brand: 'JSB', price: 1050, image: '' },
    { id: 'P072', name: 'High Astra 5way 5M with Type C', category: 'Extensions', brand: 'High Astra', price: 950, image: '' },
    { id: 'P073', name: 'Philips Dry Iron', category: 'Appliances', brand: 'Philips', price: 1600, image: '' },
    { id: 'P074', name: 'Super Taper Original', category: 'Appliances', brand: 'Super', price: 3990, image: '' },
    { id: 'P075', name: 'Wahl Balding', category: 'Appliances', brand: 'Wahl', price: 3990, image: '' },
    { id: 'P076', name: 'Geemy-6576', category: 'Appliances', brand: 'Geemy', price: 600, image: '' },
    { id: 'P077', name: 'Geemy Cordless', category: 'Appliances', brand: 'Geemy', price: 1590, image: '' },
    { id: 'P078', name: 'Nunix Room Heater with Humidifier', category: 'Appliances', brand: 'Nunix', price: 2700, image: '' },
    { id: 'P079', name: 'Chips Cutter Jua Kali', category: 'Kitchen Appliances', brand: 'Generic', price: 3500, image: '' },
    { id: 'P080', name: 'Chapati Maker', category: 'Kitchen Appliances', brand: 'Generic', price: 3700, image: '' },
];

// ============================================
// DEFAULT SECTION IMAGES
// ============================================
const DEFAULT_SECTION_IMAGES = {
    'goods-in': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    'in-house': 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    'goods-out': 'https://images.unsplash.com/photo-1566577134770-3c85bb4f3e2b?w=800&q=80',
    'reports': 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
    'delivery': 'https://images.unsplash.com/photo-1566577134770-3c85bb4f3e2b?w=800&q=80'
};

// ============================================
// DEFAULT DATA
// ============================================
const DEFAULT_DATA = {
    staff: [
        { email: 'admin@spacewise.com', name: 'Admin', role: 'admin', password: 'admin123' }
    ],
    goodsIn: [],
    stock: [],
    goodsOut: [],
    cart: [],
    orderCounter: 1,
    products: [...PRODUCTS],
    sections: ['goods-in', 'in-house', 'goods-out', 'reports', 'delivery'],
    customSections: {},
    sectionImages: { ...DEFAULT_SECTION_IMAGES },
    quotes: [
        "🚀 Excellence is not a skill, it's an attitude!",
        "💡 Every great achievement starts with a single step.",
        "🌟 You are capable of amazing things!",
        "📈 Success is the sum of small efforts repeated daily.",
        "🔥 Stay focused, stay determined, stay unstoppable.",
        "🏆 Believe you can and you're halfway there.",
        "✨ Your attitude determines your direction.",
        "💪 Push yourself because no one else will.",
        "🎯 Set your goals high and don't stop till you get there.",
        "🌈 Great things never come from comfort zones."
    ],
    footer: { paybill: '123456', account: 'SPACEWISE', mpesaPrompt: 'M-Pesa Coming Soon' },
    delivery: [
        { name: 'John Mwangi', phone: '+254 712 345 678', status: 'available' },
        { name: 'Mary Wanjiku', phone: '+254 723 456 789', status: 'busy' },
        { name: 'Peter Kiprop', phone: '+254 734 567 890', status: 'available' }
    ],
    loginBg: '',
    dashboardBg: '',
    adminBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    logo: ''
};

const DB_KEY = 'spacewiseData';

// ============================================
// DATABASE FUNCTIONS
// ============================================
function getDB() {
    try {
        const data = localStorage.getItem(DB_KEY);
        if (data) {
            const parsed = JSON.parse(data);
            // Ensure admin has correct password
            const admin = parsed.staff.find(s => s.role === 'admin');
            if (admin && !admin.password) {
                admin.password = 'admin123';
            }
            return parsed;
        }
    } catch (e) {
        console.error('Load error:', e);
    }
    // Return default data
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveDB(data) {
    try {
        localStorage.setItem(DB_KEY, JSON.stringify(data));
        console.log('✅ Data saved to localStorage');
        return true;
    } catch (e) {
        console.error('Save error:', e);
        return false;
    }
}

function initDB() {
    if (!localStorage.getItem(DB_KEY)) {
        saveDB(JSON.parse(JSON.stringify(DEFAULT_DATA)));
        console.log('✅ Initialized new database');
    }
    return getDB();
}

// ============================================
// GLOBAL DB VARIABLE
// ============================================
let DB = getDB();

// ============================================
// RENDER QUOTES
// ============================================
function renderQuotes() {
    var track = document.getElementById('marqueeTrack');
    if (!track) return;
    var qs = DB.quotes || [];
    var items = qs.concat(qs);
    track.innerHTML = items.map(function(q) {
        return '<span class="marquee-item">' + q + '</span>';
    }).join('');
}

// ============================================
// LEFT DROPDOWN MENU
// ============================================
var menuTimeout;

function openLeftMenu() {
    clearTimeout(menuTimeout);
    var dropdown = document.getElementById('leftDropdown');
    if (dropdown) dropdown.classList.add('open');
    var mainContent = document.querySelector('.main-content');
    if (mainContent) mainContent.style.filter = 'blur(4px)';
    var footer = document.querySelector('.app-footer');
    if (footer) footer.style.filter = 'blur(4px)';
}

function closeLeftMenu() {
    menuTimeout = setTimeout(function() {
        var dropdown = document.getElementById('leftDropdown');
        if (dropdown) dropdown.classList.remove('open');
        var mainContent = document.querySelector('.main-content');
        if (mainContent) mainContent.style.filter = 'none';
        var footer = document.querySelector('.app-footer');
        if (footer) footer.style.filter = 'none';
    }, 400);
}

// ============================================
// CART DROPDOWN
// ============================================
var cartTimeout;

function openCartDropdown() {
    clearTimeout(cartTimeout);
    document.getElementById('cartDropdown').classList.add('open');
}

function closeCartDropdown() {
    cartTimeout = setTimeout(function() {
        document.getElementById('cartDropdown').classList.remove('open');
    }, 400);
}

function toggleCartDropdown() {
    var dd = document.getElementById('cartDropdown');
    dd.classList.toggle('open');
    renderCartDropdown();
}

function renderCartDropdown() {
    var container = document.getElementById('cartDropdownItems');
    var totalSpan = document.getElementById('cartDropdownTotal');
    if (!container) return;
    if (DB.cart.length === 0) {
        container.innerHTML = '<div style="padding:12px 0; color:#7f8c8d; text-align:center;">Cart is empty</div>';
        totalSpan.textContent = 'KES 0';
        return;
    }
    var html = '';
    var total = 0;
    DB.cart.forEach(function(item, index) {
        total += item.price * item.quantity;
        html += `
            <div class="cart-dropdown-item">
                <span>${item.productName} x${item.quantity}</span>
                <span style="display:flex; align-items:center; gap:8px;">
                    <button onclick="updateCartQty(${index}, ${item.quantity - 1})" style="background:#e74c3c; color:white; border:none; border-radius:4px; width:24px; height:24px; cursor:pointer; font-size:14px;">−</button>
                    <span style="font-weight:600; min-width:20px; text-align:center;">${item.quantity}</span>
                    <button onclick="updateCartQty(${index}, ${item.quantity + 1})" style="background:#27ae60; color:white; border:none; border-radius:4px; width:24px; height:24px; cursor:pointer; font-size:14px;">+</button>
                </span>
                <span>KES ${(item.price * item.quantity).toLocaleString()}</span>
                <button onclick="removeFromCart(${index})" style="background:#e74c3c; color:white; border:none; border-radius:4px; width:24px; height:24px; cursor:pointer;">✕</button>
            </div>
        `;
    });
    container.innerHTML = html;
    totalSpan.textContent = 'KES ' + total.toLocaleString();
}

// ============================================
// STAFF LOGIN
// ============================================
function handleStaffLogin(event) {
    event.preventDefault();
    var email = document.getElementById('email').value.trim();
    var msg = document.getElementById('loginMessage');
    var btn = document.getElementById('loginBtn');

    if (!email) {
        showMessage('loginMessage', 'error', '⚠️ Please enter your email');
        return;
    }

    showMessage('loginMessage', 'loading', '⏳ Logging in...');
    btn.disabled = true;

    // Reload DB to ensure latest data
    DB = getDB();

    try {
        var staff = DB.staff.find(function(s) {
            return s.email.toLowerCase() === email.toLowerCase() && s.role !== 'admin';
        });
        
        if (!staff) {
            throw new Error('Access denied. Contact admin.');
        }
        
        currentUser = staff;
        showMessage('loginMessage', 'success', '✅ Welcome ' + staff.name);
        
        setTimeout(function() {
            window.location.href = 'dashboard.html?email=' + encodeURIComponent(email);
        }, 1000);
    } catch (err) {
        showMessage('loginMessage', 'error', err.message);
    }
    btn.disabled = false;
}

// ============================================
// ADMIN LOGIN - FIXED!
// ============================================
function showAdminLoginPrompt() {
    // Reload DB to ensure latest data
    DB = getDB();
    
    var password = prompt('Enter admin password:');
    
    if (password === null) {
        return; // User clicked cancel
    }
    
    if (password.trim() === '') {
        alert('⚠️ Please enter a password');
        return;
    }

    // Find admin
    var admin = DB.staff.find(function(s) {
        return s.role === 'admin';
    });

    if (!admin) {
        alert('❌ Admin account not found. Please contact support.');
        return;
    }

    console.log('Entered password:', password.trim());
    console.log('Expected password:', admin.password);

    // Check password
    if (admin.password !== password.trim()) {
        alert('❌ Invalid password. Please try again.');
        return;
    }

    // Login successful - create session
    localStorage.setItem('spacewiseSession', JSON.stringify({
        userId: admin.email,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        loginTime: Date.now()
    }));
    
    currentUser = admin;
    console.log('✅ Admin login successful! Redirecting...');
    window.location.href = 'admin.html';
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('spacewiseSession');
        currentUser = null;
        window.location.href = 'index.html';
    }
}

function showMessage(id, type, text) {
    var msgDiv = document.getElementById(id);
    if (!msgDiv) return;
    msgDiv.className = 'message ' + type;
    msgDiv.textContent = text;
    msgDiv.style.display = 'flex';
    if (type !== 'loading') {
        setTimeout(function() {
            msgDiv.style.display = 'none';
        }, 4000);
    }
}

function getEmailFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('email');
}

// ============================================
// CHANGE ADMIN PASSWORD
// ============================================
function changeAdminPassword(event) {
    event.preventDefault();
    var currentPassword = document.getElementById('currentPassword').value.trim();
    var newPassword = document.getElementById('newAdminPassword').value.trim();
    var confirmPassword = document.getElementById('confirmAdminPassword').value.trim();
    var msg = document.getElementById('passwordChangeMessage');

    if (!currentPassword || !newPassword || !confirmPassword) {
        msg.className = 'message error';
        msg.textContent = '⚠️ Please fill in all fields';
        msg.style.display = 'flex';
        return;
    }

    if (newPassword.length < 4) {
        msg.className = 'message error';
        msg.textContent = '⚠️ Password must be at least 4 characters';
        msg.style.display = 'flex';
        return;
    }

    if (newPassword !== confirmPassword) {
        msg.className = 'message error';
        msg.textContent = '⚠️ Passwords do not match';
        msg.style.display = 'flex';
        return;
    }

    // Reload DB
    DB = getDB();
    var admin = DB.staff.find(function(s) { return s.role === 'admin'; });
    if (!admin) {
        msg.className = 'message error';
        msg.textContent = '❌ Admin not found';
        msg.style.display = 'flex';
        return;
    }

    if (admin.password !== currentPassword) {
        msg.className = 'message error';
        msg.textContent = '❌ Current password is incorrect';
        msg.style.display = 'flex';
        return;
    }

    admin.password = newPassword;
    saveDB(DB);

    msg.className = 'message success';
    msg.textContent = '✅ Password changed successfully!';
    msg.style.display = 'flex';
    document.getElementById('changePasswordForm').reset();

    setTimeout(function() {
        msg.style.display = 'none';
    }, 3000);
}

// ============================================
// ADMIN NAVIGATION
// ============================================
function navigateAdmin(view) {
    var views = ['admin', 'staff', 'products', 'sections', 'content', 'transactions', 'password', 'reset'];
    views.forEach(function(v) {
        var el = document.getElementById('admin-view-' + v);
        if (el) el.style.display = 'none';
    });

    var target = document.getElementById('admin-view-' + view);
    if (target) {
        target.style.display = 'block';
        currentAdminView = view;
    }

    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.classList.toggle('active', item.dataset.section === view);
    });

    if (view === 'staff') loadAdminStaff();
    if (view === 'products') loadAdminProducts();
    if (view === 'sections') loadAdminSections();
    if (view === 'content') loadAdminContent();
    if (view === 'transactions') loadAdminTransactions();
    if (view === 'admin') loadAdminStats();

    closeLeftMenu();
}

// ============================================
// ADMIN: LOAD STAFF
// ============================================
function loadAdminStaff() {
    var list = document.getElementById('adminStaffList');
    if (!list) return;
    list.innerHTML = '';
    DB = getDB();
    DB.staff.filter(function(s) { return s.role !== 'admin'; }).forEach(function(s) {
        var div = document.createElement('div');
        div.className = 'staff-item';
        div.innerHTML = `
            <div class="info"><div class="name">${s.name}</div><div class="email">${s.email}</div></div>
            <button class="btn-remove" onclick="adminRemoveStaff('${s.email}')"><i class="fas fa-trash"></i> Remove</button>
        `;
        list.appendChild(div);
    });
    if (DB.staff.filter(function(s) { return s.role !== 'admin'; }).length === 0) {
        list.innerHTML = '<p style="color:#7f8c8d; padding:8px;">No staff members added yet</p>';
    }
}

function adminAddStaff(event) {
    event.preventDefault();
    var email = document.getElementById('adminStaffEmail').value.trim();
    var name = document.getElementById('adminStaffName').value.trim();
    if (!email || !name) {
        showMessage('adminMessage', 'error', '⚠️ Fill all fields');
        return;
    }
    DB = getDB();
    if (DB.staff.find(function(s) { return s.email.toLowerCase() === email.toLowerCase(); })) {
        showMessage('adminMessage', 'error', '⚠️ Staff already exists');
        return;
    }
    DB.staff.push({ email: email, name: name, role: 'staff' });
    saveDB(DB);
    showMessage('adminMessage', 'success', '✅ Staff added successfully!');
    document.getElementById('adminStaffForm').reset();
    document.getElementById('adminStaffForm').style.display = 'none';
    loadAdminStaff();
    loadAdminStats();
}

function adminRemoveStaff(email) {
    if (!confirm('Remove ' + email + '?')) return;
    DB = getDB();
    DB.staff = DB.staff.filter(function(s) { return s.email !== email; });
    saveDB(DB);
    loadAdminStaff();
    loadAdminStats();
    showMessage('adminMessage', 'success', '✅ Staff removed successfully!');
}

// ============================================
// ADMIN: LOAD PRODUCTS
// ============================================
function loadAdminProducts() {
    var list = document.getElementById('adminProductList');
    if (!list) return;
    DB = getDB();
    list.innerHTML = '';
    DB.products.forEach(function(p) {
        var div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `
            <div class="info"><div class="name">${p.name}</div><div class="category">${p.category} • KES ${p.price}</div></div>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button class="btn-edit" onclick="editProduct('${p.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn-remove" onclick="adminRemoveProduct('${p.id}')"><i class="fas fa-trash"></i> Remove</button>
            </div>
        `;
        list.appendChild(div);
    });
    if (DB.products.length === 0) {
        list.innerHTML = '<p style="color:#7f8c8d; padding:8px;">No products added yet</p>';
    }
}

function adminAddProduct(event) {
    event.preventDefault();
    var name = document.getElementById('adminProductName').value.trim();
    var category = document.getElementById('adminProductCategory').value.trim();
    var price = parseFloat(document.getElementById('adminProductPrice').value);
    var image = document.getElementById('adminProductImage').value.trim();

    if (!name || !category || !price) {
        showMessage('adminMessage', 'error', '⚠️ Fill in name, category and price');
        return;
    }

    DB = getDB();
    var newProduct = {
        id: 'P' + String(DB.products.length + 1).padStart(3, '0'),
        name: name,
        category: category,
        price: price,
        image: image || ''
    };
    DB.products.push(newProduct);
    saveDB(DB);
    showMessage('adminMessage', 'success', '✅ Product added successfully!');
    document.getElementById('adminProductForm').reset();
    document.getElementById('adminProductForm').style.display = 'none';
    loadAdminProducts();
    populateProductSelect();
}

function editProduct(productId) {
    var product = DB.products.find(function(p) { return p.id === productId; });
    if (!product) return;

    var newName = prompt('Product Name:', product.name);
    if (newName === null) return;
    var newCategory = prompt('Category:', product.category);
    if (newCategory === null) return;
    var newPrice = prompt('Price (KES):', product.price);
    if (newPrice === null) return;

    product.name = newName.trim() || product.name;
    product.category = newCategory.trim() || product.category;
    product.price = parseFloat(newPrice) || product.price;

    saveDB(DB);
    loadAdminProducts();
    populateProductSelect();
    showMessage('adminMessage', 'success', '✅ Product updated successfully!');
}

function adminRemoveProduct(productId) {
    if (!confirm('Remove this product?')) return;
    DB = getDB();
    DB.products = DB.products.filter(function(p) { return p.id !== productId; });
    saveDB(DB);
    loadAdminProducts();
    populateProductSelect();
    showMessage('adminMessage', 'success', '✅ Product removed successfully!');
}

// ============================================
// ADMIN: LOAD SECTIONS
// ============================================
function loadAdminSections() {
    var list = document.getElementById('adminSectionList');
    if (!list) return;
    DB = getDB();
    var allSections = ['goods-in', 'in-house', 'goods-out', 'reports', 'delivery'];
    var fullList = allSections.concat(DB.sections.filter(function(s) {
        return allSections.indexOf(s) === -1;
    }));
    list.innerHTML = '';
    fullList.forEach(function(s) {
        var isDefault = allSections.indexOf(s) !== -1;
        var names = {
            'goods-in': 'Goods In',
            'in-house': 'In-House Stock',
            'goods-out': 'Goods Out',
            'reports': 'Reports',
            'delivery': 'Delivery'
        };
        var displayName = names[s] || s.replace('-', ' ').toUpperCase();
        var hasContent = DB.customSections && DB.customSections[s];
        
        var div = document.createElement('div');
        div.className = 'section-item';
        div.innerHTML = `
            <div class="info">
                <div class="name">${displayName} ${!isDefault ? '⭐' : ''}</div>
                ${!isDefault ? `<div style="font-size:12px; color:#7f8c8d;">${hasContent ? '✅ Has content' : '⚠️ No content set'}</div>` : '<span style="font-size:12px; color:#7f8c8d;">Default</span>'}
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                ${!isDefault ? `
                    <button class="btn-edit" onclick="editCustomSection('${s}')"><i class="fas fa-edit"></i> Edit Content</button>
                    <button class="btn-remove" onclick="adminRemoveSection('${s}')"><i class="fas fa-trash"></i> Remove</button>
                ` : `<button class="btn-edit" onclick="editSectionImage('${s}')"><i class="fas fa-image"></i> Edit Image</button>`}
            </div>
        `;
        list.appendChild(div);
    });
}

function adminAddSection(event) {
    event.preventDefault();
    var name = document.getElementById('adminSectionName').value.trim().toLowerCase().replace(/\s+/g, '-');
    if (!name) {
        showMessage('adminMessage', 'error', '⚠️ Enter a section name');
        return;
    }
    DB = getDB();
    if (DB.sections.indexOf(name) !== -1) {
        showMessage('adminMessage', 'error', '⚠️ Section already exists');
        return;
    }
    DB.sections.push(name);
    if (!DB.customSections) DB.customSections = {};
    DB.customSections[name] = { 
        title: name.replace('-', ' ').toUpperCase(), 
        content: 'Welcome to ' + name.replace('-', ' ').toUpperCase() + '! Add your content here.' 
    };
    if (!DB.sectionImages) DB.sectionImages = {};
    DB.sectionImages[name] = 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80';
    saveDB(DB);
    showMessage('adminMessage', 'success', '✅ Section added!');
    document.getElementById('adminSectionForm').reset();
    document.getElementById('adminSectionForm').style.display = 'none';
    loadAdminSections();
    renderSections();
    renderDynamicSections();
}

function adminRemoveSection(name) {
    if (!confirm('Remove section "' + name + '"?')) return;
    DB = getDB();
    DB.sections = DB.sections.filter(function(s) { return s !== name; });
    if (DB.customSections) delete DB.customSections[name];
    if (DB.sectionImages) delete DB.sectionImages[name];
    saveDB(DB);
    loadAdminSections();
    renderSections();
    renderDynamicSections();
    showMessage('adminMessage', 'success', '✅ Section removed!');
}

function editCustomSection(sectionId) {
    var content = DB.customSections && DB.customSections[sectionId] ? DB.customSections[sectionId] : { title: '', content: '' };
    var title = prompt('Section Title:', content.title || sectionId.replace('-', ' ').toUpperCase());
    if (title === null) return;
    var contentText = prompt('Section Content (HTML allowed):', content.content || 'Add your content here...');
    if (contentText === null) return;
    if (!DB.customSections) DB.customSections = {};
    DB.customSections[sectionId] = { title: title || sectionId.replace('-', ' ').toUpperCase(), content: contentText };
    saveDB(DB);
    loadAdminSections();
    renderDynamicSections();
    showMessage('adminMessage', 'success', '✅ Custom section content updated!');
}

function editSectionImage(sectionId) {
    var currentImage = DB.sectionImages && DB.sectionImages[sectionId] ? DB.sectionImages[sectionId] : '';
    var newImage = prompt('Section Image URL (for ' + sectionId.replace('-', ' ').toUpperCase() + '):', currentImage);
    if (newImage === null) return;
    if (!DB.sectionImages) DB.sectionImages = {};
    DB.sectionImages[sectionId] = newImage.trim() || '';
    saveDB(DB);
    renderSectionBackgrounds();
    loadAdminSections();
    showMessage('adminMessage', 'success', '✅ Section image updated!');
}

// ============================================
// ADMIN: LOAD CONTENT
// ============================================
function loadAdminContent() {
    DB = getDB();
    document.getElementById('loginBgInput').value = DB.loginBg || '';
    document.getElementById('dashboardBgInput').value = DB.dashboardBg || '';
    document.getElementById('adminBgInput').value = DB.adminBg || '';
    document.getElementById('logoUrlInput').value = DB.logo || '';
    document.getElementById('quotesEditor').value = DB.quotes ? DB.quotes.join('\n') : '';
    document.getElementById('footerPaybill').value = DB.footer?.paybill || '';
    document.getElementById('footerAccount').value = DB.footer?.account || '';
    document.getElementById('footerMpesaPrompt').value = DB.footer?.mpesaPrompt || '';
    document.getElementById('deliveryEditorText').value = DB.delivery ? DB.delivery.map(function(d) {
        return d.name + ' | ' + d.phone + ' | ' + d.status;
    }).join('\n') : '';
    
    var container = document.getElementById('sectionImagesContainer');
    if (container) {
        var sections = ['goods-in', 'in-house', 'goods-out', 'reports', 'delivery'];
        var customSections = DB.sections.filter(function(s) { return sections.indexOf(s) === -1; });
        var allSections = sections.concat(customSections);
        container.innerHTML = allSections.map(function(id) {
            var names = {
                'goods-in': 'Goods In',
                'in-house': 'In-House Stock',
                'goods-out': 'Goods Out',
                'reports': 'Reports',
                'delivery': 'Delivery'
            };
            var displayName = names[id] || id.replace('-', ' ').toUpperCase();
            return `
                <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center; margin-bottom:6px; padding:4px 0; border-bottom:1px solid #f0f2f5;">
                    <span style="font-weight:600; min-width:140px;">${displayName}:</span>
                    <input type="text" id="sectionImg_${id}" value="${DB.sectionImages && DB.sectionImages[id] || ''}" placeholder="Image URL" style="flex:2; padding:6px 10px; border:2px solid #e8eaed; border-radius:8px; font-size:13px;">
                    <button class="btn-sm primary" onclick="saveSingleSectionImage('${id}')" style="padding:4px 12px;">Save</button>
                </div>
            `;
        }).join('');
    }
}

function saveSingleSectionImage(sectionId) {
    var input = document.getElementById('sectionImg_' + sectionId);
    if (!input) return;
    var url = input.value.trim();
    if (!DB.sectionImages) DB.sectionImages = {};
    DB.sectionImages[sectionId] = url;
    saveDB(DB);
    renderSectionBackgrounds();
    showMessage('adminMessage', 'success', '✅ Image for ' + sectionId.replace('-', ' ').toUpperCase() + ' updated!');
}

function saveLoginBg() {
    var url = document.getElementById('loginBgInput').value.trim();
    if (url) {
        DB.loginBg = url;
        saveDB(DB);
        var bg = document.querySelector('.login-background');
        if (bg) bg.style.backgroundImage = 'url(' + url + ')';
        showMessage('adminMessage', 'success', '✅ Login background updated!');
    }
}

function saveDashboardBg() {
    var url = document.getElementById('dashboardBgInput').value.trim();
    if (url) {
        DB.dashboardBg = url;
        saveDB(DB);
        var wrapper = document.getElementById('dashboardBgWrapper');
        if (wrapper) wrapper.style.backgroundImage = 'url(' + url + ')';
        showMessage('adminMessage', 'success', '✅ Dashboard background updated!');
    }
}

function saveAdminBg() {
    var url = document.getElementById('adminBgInput').value.trim();
    if (url) {
        DB.adminBg = url;
        saveDB(DB);
        var banner = document.querySelector('.admin-banner');
        if (banner) {
            banner.style.backgroundImage = 'url(' + url + ')';
            banner.style.backgroundSize = 'cover';
            banner.style.backgroundPosition = 'center';
        }
        showMessage('adminMessage', 'success', '✅ Admin background updated!');
    }
}

function saveLogo() {
    var url = document.getElementById('logoUrlInput').value.trim();
    if (url) {
        DB.logo = url;
        saveDB(DB);
        document.querySelectorAll('.nav-logo, .logo-large').forEach(function(el) {
            if (el) el.src = url;
        });
        showMessage('adminMessage', 'success', '✅ Logo updated!');
    }
}

function saveQuotes() {
    var text = document.getElementById('quotesEditor').value;
    var lines = text.split('\n').map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
    if (lines.length === 0) {
        showMessage('adminMessage', 'error', '⚠️ Enter at least one quote');
        return;
    }
    DB.quotes = lines;
    saveDB(DB);
    renderQuotes();
    showMessage('adminMessage', 'success', '✅ Quotes updated!');
}

function saveDeliveryContacts() {
    var text = document.getElementById('deliveryEditorText').value;
    var lines = text.split('\n').map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
    var contacts = lines.map(function(line) {
        var parts = line.split('|').map(function(p) { return p.trim(); });
        return { name: parts[0] || 'Unknown', phone: parts[1] || '+254 700 000 000', status: parts[2] || 'available' };
    });
    if (contacts.length === 0) {
        showMessage('adminMessage', 'error', '⚠️ Enter at least one contact');
        return;
    }
    DB.delivery = contacts;
    saveDB(DB);
    renderDelivery();
    showMessage('adminMessage', 'success', '✅ Delivery contacts updated!');
}

function saveFooterOptions() {
    var paybill = document.getElementById('footerPaybill').value.trim();
    var account = document.getElementById('footerAccount').value.trim();
    var mpesaPrompt = document.getElementById('footerMpesaPrompt').value.trim();

    if (paybill) DB.footer.paybill = paybill;
    if (account) DB.footer.account = account;
    if (mpesaPrompt) DB.footer.mpesaPrompt = mpesaPrompt;

    saveDB(DB);
    updateFooter();
    showMessage('adminMessage', 'success', '✅ Footer options updated!');
}

// ============================================
// ADMIN: LOAD TRANSACTIONS
// ============================================
function loadAdminTransactions() {
    DB = getDB();
    var goodsInBody = document.getElementById('adminGoodsInBody');
    if (goodsInBody) {
        goodsInBody.innerHTML = '';
        DB.goodsIn.slice().reverse().forEach(function(r) {
            var tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${new Date(r.date).toLocaleDateString()}</td>
                <td>${r.productName}</td>
                <td>${r.quantity}</td>
                <td>KES ${(r.quantity * r.costPrice).toLocaleString()}</td>
                <td>${r.location}</td>
                <td>${r.supplier}</td>
                <td>${r.staff}</td>
            `;
            goodsInBody.appendChild(tr);
        });
        if (DB.goodsIn.length === 0) {
            goodsInBody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:20px; color:#7f8c8d;">No goods in records</td></tr>';
        }
    }

    var goodsOutBody = document.getElementById('adminGoodsOutBody');
    if (goodsOutBody) {
        goodsOutBody.innerHTML = '';
        DB.goodsOut.slice().reverse().forEach(function(r) {
            var itemsStr = r.items.map(function(i) { return i.productName + ' x' + i.quantity; }).join(', ');
            var tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${new Date(r.date).toLocaleDateString()}</td>
                <td>${r.orderNumber}</td>
                <td>${itemsStr}</td>
                <td>${r.items.reduce(function(s, i) { return s + i.quantity; }, 0)}</td>
                <td>KES ${r.total.toLocaleString()}</td>
                <td>${r.customer}</td>
                <td>${r.staff}</td>
            `;
            goodsOutBody.appendChild(tr);
        });
        if (DB.goodsOut.length === 0) {
            goodsOutBody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:20px; color:#7f8c8d;">No sales records</td></tr>';
        }
    }
}

function showAdminTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    if (tab === 'goods-in') {
        document.querySelector('.tab-btn:first-child').classList.add('active');
        document.getElementById('adminGoodsInTable').style.display = 'block';
        document.getElementById('adminGoodsOutTable').style.display = 'none';
    } else {
        document.querySelector('.tab-btn:last-child').classList.add('active');
        document.getElementById('adminGoodsInTable').style.display = 'none';
        document.getElementById('adminGoodsOutTable').style.display = 'block';
    }
    loadAdminTransactions();
}

// ============================================
// ADMIN: LOAD STATS
// ============================================
function loadAdminStats() {
    DB = getDB();
    document.getElementById('adminGoodsIn').textContent = DB.goodsIn.length;
    document.getElementById('adminStock').textContent = DB.stock.reduce(function(s, i) { return s + i.quantity; }, 0);
    document.getElementById('adminSold').textContent = DB.goodsOut.length;
    var revenue = DB.goodsOut.reduce(function(s, i) { return s + i.total; }, 0);
    document.getElementById('adminRevenue').textContent = 'KES ' + revenue.toLocaleString();
    var cost = DB.goodsIn.reduce(function(s, i) { return s + i.quantity * i.costPrice; }, 0);
    document.getElementById('adminProfit').textContent = 'KES ' + (revenue - cost).toLocaleString();
    document.getElementById('adminStaff').textContent = DB.staff.filter(function(s) { return s.role !== 'admin'; }).length;
}

// ============================================
// ADMIN FUNCTIONS
// ============================================
function loadAdmin() {
    // Check session
    var session = localStorage.getItem('spacewiseSession');
    if (session) {
        try {
            var user = JSON.parse(session);
            if (user && user.role === 'admin') {
                currentUser = user;
                // Reload DB
                DB = getDB();
                loadAdminData();
                return;
            }
        } catch (e) {}
    }
    
    // If not logged in, redirect to login
    window.location.href = 'index.html';
}

function loadAdminData() {
    DB = getDB();
    if (DB.adminBg) {
        var banner = document.querySelector('.admin-banner');
        if (banner) {
            banner.style.backgroundImage = 'url(' + DB.adminBg + ')';
            banner.style.backgroundSize = 'cover';
            banner.style.backgroundPosition = 'center';
        }
    }
    loadAdminStats();
    loadAdminStaff();
    loadAdminProducts();
    loadAdminSections();
    loadAdminContent();
    loadAdminTransactions();
    navigateAdmin('admin');
}

// ============================================
// RESET FUNCTIONS
// ============================================
function resetAllData() {
    if (!confirm('⚠️ This will DELETE ALL data. Are you sure?')) return;
    if (!confirm('⚠️ FINAL WARNING: This cannot be undone! Continue?')) return;
    try {
        var admin = DB.staff.find(function(s) { return s.role === 'admin'; });
        DB.userData = {};
        DB.goodsIn = [];
        DB.stock = [];
        DB.goodsOut = [];
        DB.cart = [];
        DB.orderCounter = 1;
        DB.products = [...PRODUCTS];
        DB.staff = admin ? [admin] : [{ email: 'admin@spacewise.com', name: 'Admin', role: 'admin', password: 'admin123' }];
        saveDB(DB);
        showMessage('adminMessage', 'success', '✅ All data reset successfully! Refreshing...');
        setTimeout(function() { location.reload(); }, 1500);
    } catch (e) {
        showMessage('adminMessage', 'error', '❌ Reset failed: ' + e.message);
    }
}

function resetStockOnly() {
    if (!confirm('⚠️ This will DELETE all current stock. Continue?')) return;
    try {
        DB.stock = [];
        DB.cart = [];
        saveDB(DB);
        showMessage('adminMessage', 'success', '✅ Stock reset successfully! Refreshing...');
        setTimeout(function() { location.reload(); }, 1500);
    } catch (e) {
        showMessage('adminMessage', 'error', '❌ Reset failed: ' + e.message);
    }
}

function resetTransactionsOnly() {
    if (!confirm('⚠️ This will DELETE all Goods In and Goods Out records. Continue?')) return;
    try {
        DB.goodsIn = [];
        DB.goodsOut = [];
        DB.orderCounter = 1;
        saveDB(DB);
        showMessage('adminMessage', 'success', '✅ Transactions reset successfully! Refreshing...');
        setTimeout(function() { location.reload(); }, 1500);
    } catch (e) {
        showMessage('adminMessage', 'error', '❌ Reset failed: ' + e.message);
    }
}

function restoreDefaultProducts() {
    if (!confirm('⚠️ This will restore default products. Custom products will be lost. Continue?')) return;
    try {
        DB.products = [...PRODUCTS];
        saveDB(DB);
        showMessage('adminMessage', 'success', '✅ Default products restored! Refreshing...');
        setTimeout(function() { location.reload(); }, 1500);
    } catch (e) {
        showMessage('adminMessage', 'error', '❌ Restore failed: ' + e.message);
    }
}

function resetAllUsersData() {
    if (!confirm('⚠️ This will DELETE all user data. Continue?')) return;
    try {
        DB.userData = {};
        saveDB(DB);
        showMessage('adminMessage', 'success', '✅ All users data reset! Refreshing...');
        setTimeout(function() { location.reload(); }, 1500);
    } catch (e) {
        showMessage('adminMessage', 'error', '❌ Reset failed: ' + e.message);
    }
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================
function loadDashboard() {
    var email = getEmailFromUrl();
    if (!email) { window.location.href = 'index.html'; return; }
    
    DB = getDB();
    var staff = DB.staff.find(function(s) {
        return s.email.toLowerCase() === email.toLowerCase() && s.role !== 'admin';
    });
    if (!staff) { window.location.href = 'index.html'; return; }
    
    currentUser = staff;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userName').textContent = staff.name || 'Staff';

    if (DB.dashboardBg) {
        var wrapper = document.getElementById('dashboardBgWrapper');
        if (wrapper) wrapper.style.backgroundImage = 'url(' + DB.dashboardBg + ')';
    }
    if (DB.logo) {
        document.querySelectorAll('.nav-logo, .logo-large').forEach(function(el) {
            if (el) el.src = DB.logo;
        });
    }

    populateProductSelect();
    updateAllBadges();
    loadGoodsInList();
    loadStockList();
    loadGoodsOutList();
    updateStockSummary();
    updateReports();
    checkLowStock();
    loadCart();
    renderDelivery();
    renderSections();
    renderDynamicSections();
    renderSectionBackgrounds();
    updateFooter();
}

// ============================================
// RENDER SECTION BACKGROUNDS
// ============================================
function renderSectionBackgrounds() {
    var sections = ['goods-in', 'in-house', 'goods-out', 'reports', 'delivery'];
    sections.forEach(function(id) {
        var wrapper = document.querySelector('#section-' + id + ' .section-bg');
        if (wrapper && DB.sectionImages && DB.sectionImages[id]) {
            wrapper.style.backgroundImage = 'url(' + DB.sectionImages[id] + ')';
            wrapper.style.opacity = '0.08';
        }
    });
    if (DB.customSections) {
        Object.keys(DB.customSections).forEach(function(id) {
            var wrapper = document.querySelector('#section-' + id + ' .section-bg');
            if (wrapper && DB.sectionImages && DB.sectionImages[id]) {
                wrapper.style.backgroundImage = 'url(' + DB.sectionImages[id] + ')';
                wrapper.style.opacity = '0.08';
            }
        });
    }
}

// ============================================
// RENDER DYNAMIC SECTIONS
// ============================================
function renderDynamicSections() {
    var container = document.getElementById('dynamicSectionsContainer');
    if (!container) return;
    var allSections = ['goods-in', 'in-house', 'goods-out', 'reports', 'delivery'];
    var customSections = DB.sections.filter(function(s) { return allSections.indexOf(s) === -1; });
    if (customSections.length === 0) {
        container.innerHTML = '';
        return;
    }
    var html = '';
    customSections.forEach(function(sectionId) {
        var content = DB.customSections && DB.customSections[sectionId] ? DB.customSections[sectionId] : { title: sectionId.replace('-', ' ').toUpperCase(), content: 'Content not set.' };
        var bgImage = DB.sectionImages && DB.sectionImages[sectionId] ? DB.sectionImages[sectionId] : 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80';
        html += `
            <div class="section-wrapper custom-section" id="section-${sectionId}">
                <div class="section-bg" style="background-image: url('${bgImage}'); opacity:0.06;"></div>
                <div class="section-content">
                    <div class="section-header">
                        <h3><i class="fas fa-cube"></i> ${content.title || sectionId.replace('-', ' ').toUpperCase()}</h3>
                        <button class="btn-close-section" onclick="closeCustomSection('${sectionId}')"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="custom-section-content">
                        ${content.content || '<p style="color:#7f8c8d;">No content added yet.</p>'}
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function closeCustomSection(sectionId) {
    var el = document.getElementById('section-' + sectionId);
    if (el) el.style.display = 'none';
}

// ============================================
// RENDER DELIVERY
// ============================================
function renderDelivery() {
    var container = document.getElementById('deliveryContacts');
    if (!container) return;
    var list = DB.delivery || [];
    container.innerHTML = list.map(function(d) {
        return `
            <div class="contact-item">
                <div class="contact-avatar">🚚</div>
                <div class="contact-details">
                    <div class="contact-name">${d.name}</div>
                    <div class="contact-phone"><i class="fas fa-phone"></i> ${d.phone}</div>
                </div>
                <span class="contact-badge ${d.status === 'available' ? 'available' : ''}">${d.status === 'available' ? 'Available' : 'Busy'}</span>
            </div>
        `;
    }).join('');
}

// ============================================
// RENDER SECTIONS
// ============================================
function renderSections() {
    var sections = ['goods-in', 'in-house', 'goods-out', 'reports', 'delivery'];
    var allSections = sections.concat(DB.sections.filter(function(s) { return sections.indexOf(s) === -1; }));

    var dropdownSection = document.querySelector('#leftDropdown .dropdown-section');
    if (dropdownSection) {
        var dashboardItem = dropdownSection.querySelector('.dropdown-item[data-section="dashboard"]');
        var html = '<div class="dropdown-title">Navigation</div>';
        if (dashboardItem) html += dashboardItem.outerHTML;
        allSections.filter(function(s) { return s !== 'dashboard'; }).forEach(function(s) {
            var names = {
                'goods-in': 'Goods In',
                'in-house': 'In-House Stock',
                'goods-out': 'Goods Out',
                'reports': 'Reports',
                'delivery': 'Delivery'
            };
            html += '<button class="dropdown-item" data-section="' + s + '" onclick="navigateTo(\'' + s + '\')">';
            html += '<i class="fas fa-cube"></i> ' + (names[s] || s.replace('-', ' ').toUpperCase());
            html += '</button>';
        });
        dropdownSection.innerHTML = html;
    }

    var grid = document.getElementById('dashboardGrid');
    if (grid) {
        var dynamicContainer = document.getElementById('dynamicGridCards');
        if (dynamicContainer) {
            var dynamicSections = DB.sections.filter(function(s) { return sections.indexOf(s) === -1; });
            dynamicContainer.innerHTML = dynamicSections.map(function(s) {
                return `
                    <div class="grid-card" onclick="navigateTo('${s}')">
                        <div class="grid-icon"><i class="fas fa-cube"></i></div>
                        <h3>${s.replace('-', ' ').toUpperCase()}</h3>
                        <p>Custom section</p>
                        <span class="badge">✨</span>
                    </div>
                `;
            }).join('');
        }
    }
}

function updateFooter() {
    var paybillText = document.getElementById('footerPaybillText');
    if (paybillText) paybillText.textContent = DB.footer?.paybill || '123456';
    var accountText = document.getElementById('footerAccountText');
    if (accountText) accountText.textContent = DB.footer?.account || 'SPACEWISE';
    var mpesaText = document.getElementById('mpesaPromptText');
    if (mpesaText) mpesaText.textContent = DB.footer?.mpesaPrompt || 'M-Pesa Coming Soon';
}

// ============================================
// NAVIGATION (Dashboard)
// ============================================
function navigateTo(section) {
    var sections = ['goods-in', 'in-house', 'goods-out', 'reports', 'delivery'];
    var isCustom = sections.indexOf(section) === -1;
    
    document.querySelectorAll('.section').forEach(function(s) { s.style.display = 'none'; });
    document.querySelectorAll('.section-wrapper.custom-section').forEach(function(s) { s.style.display = 'none'; });
    
    if (isCustom) {
        var target = document.getElementById('section-' + section);
        if (target) {
            target.style.display = 'block';
            target.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        var target = document.getElementById('section-' + section);
        if (target) {
            target.style.display = 'block';
            target.scrollIntoView({ behavior: 'smooth' });
        }
        if (section === 'in-house') { loadStockList(); updateStockSummary(); }
        if (section === 'goods-in') { loadGoodsInList(); }
        if (section === 'goods-out') { loadGoodsOutList(); }
        if (section === 'reports') { updateReports(); }
        if (section === 'cart') { loadCart(); }
    }
    
    currentView = section;
    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.classList.toggle('active', item.dataset.section === section);
    });
    closeLeftMenu();
}

function closeSection() {
    document.querySelectorAll('.section').forEach(function(s) { s.style.display = 'none'; });
    document.querySelectorAll('.section-wrapper.custom-section').forEach(function(s) { s.style.display = 'none'; });
}

// ============================================
// GOODS IN FUNCTIONS
// ============================================
function populateProductSelect() {
    var select = document.getElementById('productSelect');
    if (!select) return;
    DB = getDB();
    select.innerHTML = '';
    DB.products.forEach(function(p) {
        var opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name + ' (' + p.category + ') - KES ' + p.price;
        opt.dataset.price = p.price;
        select.appendChild(opt);
    });
}

function filterProducts() {
    var search = document.getElementById('productSearch').value.toLowerCase();
    var select = document.getElementById('productSelect');
    Array.from(select.options).forEach(function(opt) {
        opt.style.display = opt.textContent.toLowerCase().indexOf(search) !== -1 ? '' : 'none';
    });
}

function addGoodsIn(event) {
    event.preventDefault();
    var productId = document.getElementById('productSelect').value;
    var quantity = parseInt(document.getElementById('quantityIn').value);
    var location = document.getElementById('location').value.trim();
    var supplier = document.getElementById('supplier').value.trim() || 'Unknown';
    var notes = document.getElementById('goodsInNotes').value.trim();

    if (!productId) { showMessage('dashboardMessage', 'error', '⚠️ Select a product'); return; }
    DB = getDB();
    var prod = DB.products.find(function(p) { return p.id === productId; });
    if (!prod) { showMessage('dashboardMessage', 'error', '⚠️ Product not found'); return; }
    if (!quantity || !location) { showMessage('dashboardMessage', 'error', '⚠️ Quantity and location required'); return; }

    var record = {
        id: 'GI-' + Date.now().toString().slice(-6),
        productId: prod.id,
        productName: prod.name,
        category: prod.category,
        quantity: quantity,
        costPrice: prod.price,
        location: location,
        supplier: supplier,
        notes: notes,
        date: new Date().toISOString(),
        staff: currentUser ? currentUser.name : 'Unknown'
    };
    DB.goodsIn.push(record);

    var sellingPrice = Math.round(prod.price * 1.3);
    var existingStock = DB.stock.find(function(s) { return s.productId === prod.id && s.location === location; });
    if (existingStock) {
        existingStock.quantity += quantity;
        existingStock.supplier = supplier;
    } else {
        DB.stock.push({
            id: 'ST-' + Date.now().toString().slice(-6),
            productId: prod.id,
            productName: prod.name,
            category: prod.category,
            quantity: quantity,
            costPrice: prod.price,
            sellingPrice: sellingPrice,
            location: location,
            supplier: supplier,
            image: prod.image || '',
            dateAdded: new Date().toISOString()
        });
    }

    saveDB(DB);
    updateAllBadges();
    showGoodsAddedNotification('✅ Goods added successfully! 😁');
    document.getElementById('goodsInForm').reset();
    loadGoodsInList();
    loadStockList();
    updateStockSummary();
    checkLowStock();
}

function showGoodsAddedNotification(message) {
    var existing = document.querySelector('.goods-added-notification');
    if (existing) existing.remove();
    var notification = document.createElement('div');
    notification.className = 'goods-added-notification';
    notification.innerHTML = '<i class="fas fa-check-circle" style="color:#27ae60; font-size:18px;"></i><span>' + message + '</span><button onclick="this.parentElement.remove()" style="background:transparent; border:none; color:#27ae60; cursor:pointer; font-size:16px;">✕</button>';
    notification.style.cssText = 'position:fixed; bottom:30px; right:30px; background:#e8f5e9; color:#1a1a2e; padding:16px 24px; border-radius:12px; box-shadow:0 8px 32px rgba(39,174,96,0.25); border:2px solid #27ae60; display:flex; align-items:center; gap:12px; font-weight:600; font-size:15px; z-index:9999; animation:slideUp 0.5s ease; max-width:400px; font-family:"Inter",sans-serif;';
    document.body.appendChild(notification);
    setTimeout(function() {
        if (notification.parentElement) {
            notification.style.animation = 'slideDown 0.4s ease';
            setTimeout(function() { if (notification.parentElement) notification.remove(); }, 400);
        }
    }, 5000);
}

function loadGoodsInList() {
    var container = document.getElementById('goodsInList');
    if (!container) return;
    DB = getDB();
    if (DB.goodsIn.length === 0) {
        container.innerHTML = '<div class="empty-state"><span class="empty-icon">📦</span><p>No goods recorded yet</p></div>';
        return;
    }
    container.innerHTML = '';
    DB.goodsIn.slice().reverse().forEach(function(r) {
        var div = document.createElement('div');
        div.className = 'transaction-item';
        div.innerHTML = `
            <div class="details">
                <div class="title">${r.productName}</div>
                <div class="sub">📂 ${r.category} • Qty: ${r.quantity} • Location: ${r.location}</div>
                <div class="sub" style="font-size:12px;">📅 ${new Date(r.date).toLocaleString()} • 👤 ${r.staff}</div>
            </div>
            <div class="amount cost">KES ${(r.quantity * r.costPrice).toLocaleString()}</div>
        `;
        container.appendChild(div);
    });
}

// ============================================
// STOCK FUNCTIONS
// ============================================
function loadStockList() {
    var container = document.getElementById('stockList');
    if (!container) return;
    DB = getDB();
    if (DB.stock.length === 0) {
        container.innerHTML = '<div class="empty-state"><span class="empty-icon">🏠</span><p>No stock available</p></div>';
        return;
    }
    container.innerHTML = '';
    DB.stock.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'stock-item';
        var imgHtml = item.image ? '<img src="' + item.image + '" class="item-img" alt="' + item.productName + '" onerror="this.style.display=\'none\'">' : '<div class="item-img" style="display:flex;align-items:center;justify-content:center;background:#f0f2f5;font-size:24px;">📦</div>';
        div.innerHTML = `
            <div class="item-checkbox">
                <input type="checkbox" class="stock-checkbox" data-stock-id="${item.id}">
            </div>
            ${imgHtml}
            <div class="info">
                <div class="name">${item.productName}</div>
                <div class="category">📂 ${item.category}</div>
                <div style="font-size:12px; color:#95a5a6;">📍 ${item.location} | Supplier: ${item.supplier}</div>
                <div style="font-size:12px; color:#27ae60;">Sell: KES ${item.sellingPrice}</div>
            </div>
            <div class="qty">${item.quantity} units</div>
            <div class="item-qty-control">
                <input type="number" min="1" max="${item.quantity}" value="1" class="qty-input">
                <button class="btn-add-cart" onclick="addSingleToCart('${item.id}')"><i class="fas fa-cart-plus"></i> Add</button>
            </div>
        `;
        container.appendChild(div);
    });
    document.querySelectorAll('.stock-checkbox').forEach(function(cb) {
        cb.addEventListener('change', function() {
            var parent = this.closest('.stock-item');
            var qtyControl = parent.querySelector('.item-qty-control');
            if (this.checked) {
                parent.classList.add('checked');
                qtyControl.classList.add('show');
                this.style.accentColor = '#27ae60';
            } else {
                parent.classList.remove('checked');
                qtyControl.classList.remove('show');
                this.style.accentColor = '';
            }
        });
    });
}

function filterStock() {
    var search = document.getElementById('stockSearch').value.toLowerCase().trim();
    document.querySelectorAll('.stock-item').forEach(function(item) {
        var name = item.querySelector('.name')?.textContent?.toLowerCase() || '';
        item.style.display = (search === '' || name.indexOf(search) === 0) ? '' : 'none';
    });
}

function updateStockSummary() {
    DB = getDB();
    var totalItems = DB.stock.reduce(function(sum, i) { return sum + i.quantity; }, 0);
    var totalValue = DB.stock.reduce(function(sum, i) { return sum + (i.quantity * i.costPrice); }, 0);
    var categories = new Set(DB.stock.map(function(i) { return i.category; }));
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalValue').textContent = 'KES ' + totalValue.toLocaleString();
    document.getElementById('totalCategories').textContent = categories.size;
}

function checkLowStock() {
    DB = getDB();
    var lowStockItems = DB.stock.filter(function(i) { return i.quantity <= 3; });
    var alertDiv = document.getElementById('lowStockAlert');
    var msgSpan = document.getElementById('lowStockMessage');
    if (lowStockItems.length > 0) {
        alertDiv.style.display = 'flex';
        msgSpan.textContent = 'Low stock: ' + lowStockItems.map(function(i) { return i.productName; }).join(', ');
    } else {
        alertDiv.style.display = 'none';
    }
}

// ============================================
// ADD TO CART FUNCTIONS
// ============================================
function addSingleToCart(stockId) {
    DB = getDB();
    var stockItem = DB.stock.find(function(s) { return s.id === stockId; });
    if (!stockItem) { showMessage('dashboardMessage', 'error', '⚠️ Item not found in stock'); return; }
    var parent = document.querySelector('.stock-item[data-stock-id="' + stockId + '"]');
    var qtyInput = parent?.querySelector('.qty-input');
    var qty = parseInt(qtyInput?.value || 1);
    if (isNaN(qty) || qty < 1) qty = 1;
    if (qty > stockItem.quantity) { showMessage('dashboardMessage', 'error', '⚠️ Not enough stock. Available: ' + stockItem.quantity); return; }

    var existing = DB.cart.find(function(c) { return c.stockId === stockId; });
    if (existing) {
        if (stockItem.quantity < qty) { showMessage('dashboardMessage', 'error', '⚠️ Not enough stock. Available: ' + stockItem.quantity); return; }
        existing.quantity += qty;
    } else {
        DB.cart.push({ stockId: stockId, productName: stockItem.productName, quantity: qty, price: stockItem.sellingPrice });
    }
    stockItem.quantity -= qty;
    if (stockItem.quantity < 0) stockItem.quantity = 0;
    saveDB(DB);
    updateAllBadges();
    loadCart();
    renderCartDropdown();
    loadStockList();
    updateStockSummary();
    checkLowStock();
    if (parent) {
        var cb = parent.querySelector('.stock-checkbox');
        if (cb) { cb.checked = false; parent.classList.remove('checked'); parent.querySelector('.item-qty-control')?.classList.remove('show'); }
    }
    showMessage('dashboardMessage', 'success', '✅ Added ' + qty + ' × ' + stockItem.productName + ' to cart (' + stockItem.quantity + ' left in stock)');
}

function addSelectedToCart() {
    var checkboxes = document.querySelectorAll('.stock-checkbox:checked');
    if (checkboxes.length === 0) { showMessage('dashboardMessage', 'error', '⚠️ Select at least one item'); return; }
    var added = 0;
    var errors = [];
    DB = getDB();
    checkboxes.forEach(function(cb) {
        var stockId = cb.dataset.stockId;
        var stockItem = DB.stock.find(function(s) { return s.id === stockId; });
        if (!stockItem) { errors.push('Item not found'); return; }
        var parent = cb.closest('.stock-item');
        var qtyInput = parent?.querySelector('.qty-input');
        var qty = parseInt(qtyInput?.value || 1);
        if (isNaN(qty) || qty < 1) qty = 1;
        if (qty > stockItem.quantity) { errors.push(stockItem.productName + ': only ' + stockItem.quantity + ' available'); return; }
        var existing = DB.cart.find(function(c) { return c.stockId === stockId; });
        if (existing) {
            if (stockItem.quantity < qty) { errors.push(stockItem.productName + ': only ' + stockItem.quantity + ' available'); return; }
            existing.quantity += qty;
        } else {
            DB.cart.push({ stockId: stockId, productName: stockItem.productName, quantity: qty, price: stockItem.sellingPrice });
        }
        stockItem.quantity -= qty;
        if (stockItem.quantity < 0) stockItem.quantity = 0;
        added++;
        cb.checked = false;
        if (parent) { parent.classList.remove('checked'); parent.querySelector('.item-qty-control')?.classList.remove('show'); }
    });
    if (added > 0) {
        saveDB(DB);
        updateAllBadges();
        loadCart();
        renderCartDropdown();
        loadStockList();
        updateStockSummary();
        checkLowStock();
        var msg = '✅ ' + added + ' item(s) added to cart';
        if (errors.length > 0) { msg += ' ⚠️ ' + errors.join('; '); }
        showMessage('dashboardMessage', 'success', msg);
    } else if (errors.length > 0) {
        showMessage('dashboardMessage', 'error', '⚠️ ' + errors.join('; '));
    } else {
        showMessage('dashboardMessage', 'error', '⚠️ No items could be added');
    }
}

// ============================================
// CART FUNCTIONS
// ============================================
function loadCart() {
    var container = document.getElementById('cartItems');
    if (!container) return;
    DB = getDB();
    if (DB.cart.length === 0) {
        container.innerHTML = '<div class="empty-state"><span class="empty-icon">🛒</span><p>Your cart is empty.</p></div>';
        document.getElementById('cartTotal').textContent = 'KES 0';
        return;
    }
    var html = '';
    var total = 0;
    DB.cart.forEach(function(item, index) {
        var subtotal = item.price * item.quantity;
        total += subtotal;
        html += `
            <div class="cart-item">
                <span class="item-name">${item.productName}</span>
                <span class="item-qty">
                    <button onclick="updateCartQty(${index}, ${item.quantity - 1})" style="background:#e74c3c; color:white; border:none; border-radius:4px; width:28px; height:28px; cursor:pointer; font-size:16px; font-weight:bold;">−</button>
                    <span style="padding:0 12px; font-weight:600; font-size:16px; min-width:30px; text-align:center; display:inline-block;">${item.quantity}</span>
                    <button onclick="updateCartQty(${index}, ${item.quantity + 1})" style="background:#27ae60; color:white; border:none; border-radius:4px; width:28px; height:28px; cursor:pointer; font-size:16px; font-weight:bold;">+</button>
                </span>
                <span class="item-price">KES ${subtotal.toLocaleString()}</span>
                <button class="btn-remove-cart" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            </div>
        `;
    });
    container.innerHTML = html;
    document.getElementById('cartTotal').textContent = 'KES ' + total.toLocaleString();
    updateAllBadges();
}

function updateCartQty(index, newQty) {
    if (newQty <= 0) { removeFromCart(index); return; }
    DB = getDB();
    var cartItem = DB.cart[index];
    if (!cartItem) return;
    var stockItem = DB.stock.find(function(s) { return s.id === cartItem.stockId; });
    if (!stockItem) {
        DB.cart.splice(index, 1);
        saveDB(DB);
        loadCart();
        renderCartDropdown();
        showMessage('dashboardMessage', 'error', '⚠️ Item no longer in stock, removed from cart');
        return;
    }
    var diff = newQty - cartItem.quantity;
    if (diff > 0) {
        if (stockItem.quantity < diff) { showMessage('dashboardMessage', 'error', '⚠️ Not enough stock for ' + cartItem.productName + '. Available: ' + stockItem.quantity); return; }
        stockItem.quantity -= diff;
    } else if (diff < 0) {
        stockItem.quantity += Math.abs(diff);
    }
    cartItem.quantity = newQty;
    saveDB(DB);
    loadCart();
    renderCartDropdown();
    loadStockList();
    updateStockSummary();
    checkLowStock();
    updateAllBadges();
    showMessage('dashboardMessage', 'success', '✅ Cart updated: ' + cartItem.productName + ' x' + newQty);
}

function removeFromCart(index) {
    DB = getDB();
    var cartItem = DB.cart[index];
    if (!cartItem) return;
    var stockItem = DB.stock.find(function(s) { return s.id === cartItem.stockId; });
    if (stockItem) { stockItem.quantity += cartItem.quantity; }
    DB.cart.splice(index, 1);
    saveDB(DB);
    loadCart();
    renderCartDropdown();
    loadStockList();
    updateStockSummary();
    checkLowStock();
    updateAllBadges();
    showMessage('dashboardMessage', 'success', '✅ Item removed from cart, stock updated');
}

function openCustomerModal() {
    DB = getDB();
    if (DB.cart.length === 0) { showMessage('dashboardMessage', 'error', '⚠️ Cart is empty'); return; }
    document.getElementById('customerModal').style.display = 'flex';
}

function closeCustomerModal() {
    document.getElementById('customerModal').style.display = 'none';
}

function processCheckout(event) {
    event.preventDefault();
    var name = document.getElementById('customerName').value.trim();
    var phone = document.getElementById('customerPhone').value.trim();
    var email = document.getElementById('customerEmail').value.trim();

    if (!name || !phone) {
        alert('⚠️ Please fill in customer name and phone');
        return;
    }

    DB = getDB();
    for (var i = 0; i < DB.cart.length; i++) {
        var item = DB.cart[i];
        var stockItem = DB.stock.find(function(s) { return s.id === item.stockId; });
        if (!stockItem) { alert('⚠️ Stock error for ' + item.productName + '. Please remove and re-add.'); return; }
        if (stockItem.quantity < 0) { stockItem.quantity = 0; }
    }

    var orderNumber = 'ORD-' + String(DB.orderCounter++).padStart(4, '0');
    var total = 0;
    var items = DB.cart.map(function(item) {
        total += item.price * item.quantity;
        return { productName: item.productName, quantity: item.quantity, price: item.price };
    });

    var record = {
        id: 'GO-' + Date.now().toString().slice(-6),
        orderNumber: orderNumber,
        items: items,
        total: total,
        customer: name,
        customerPhone: phone,
        customerEmail: email || 'N/A',
        date: new Date().toISOString(),
        staff: currentUser ? currentUser.name : 'Unknown'
    };
    DB.goodsOut.push(record);
    DB.cart = [];
    saveDB(DB);
    updateAllBadges();
    loadCart();
    loadGoodsOutList();
    loadStockList();
    updateStockSummary();
    checkLowStock();
    closeCustomerModal();
    generateReceipt(orderNumber, items, total, name, phone, email);
    showMessage('dashboardMessage', 'success', '✅ Sale complete! Order #' + orderNumber);
}

// ============================================
// GOODS OUT FUNCTIONS
// ============================================
function loadGoodsOutList() {
    var container = document.getElementById('goodsOutList');
    if (!container) return;
    DB = getDB();
    if (DB.goodsOut.length === 0) {
        container.innerHTML = '<div class="empty-state"><span class="empty-icon">🚚</span><p>No sales yet</p></div>';
        return;
    }
    container.innerHTML = '';
    DB.goodsOut.slice().reverse().forEach(function(r) {
        var div = document.createElement('div');
        div.className = 'transaction-item';
        var itemsStr = r.items.map(function(i) { return i.productName + ' x' + i.quantity; }).join(', ');
        div.innerHTML = `
            <div class="details">
                <div class="title">Order #${r.orderNumber}</div>
                <div class="sub">${itemsStr}</div>
                <div class="sub" style="font-size:12px;">👤 ${r.customer} • 📅 ${new Date(r.date).toLocaleString()} • 👤 ${r.staff}</div>
            </div>
            <div class="amount">KES ${r.total.toLocaleString()}</div>
        `;
        container.appendChild(div);
    });
}

// ============================================
// REPORTS FUNCTIONS
// ============================================
function updateReports() {
    var grid = document.getElementById('reportsGrid');
    if (!grid) return;
    DB = getDB();
    var totalGoodsIn = DB.goodsIn.reduce(function(sum, i) { return sum + i.quantity; }, 0);
    var totalGoodsOut = DB.goodsOut.reduce(function(sum, i) { return sum + i.items.reduce(function(s, it) { return s + it.quantity; }, 0); }, 0);
    var currentStock = DB.stock.reduce(function(sum, i) { return sum + i.quantity; }, 0);
    var revenue = DB.goodsOut.reduce(function(sum, i) { return sum + i.total; }, 0);
    var cost = DB.goodsIn.reduce(function(sum, i) { return sum + i.quantity * i.costPrice; }, 0);
    var profit = revenue - cost;
    grid.innerHTML = `
        <div class="report-card"><h4>📦 Goods In</h4><div class="report-number">${totalGoodsIn}</div></div>
        <div class="report-card"><h4>🚚 Sales</h4><div class="report-number">${totalGoodsOut}</div></div>
        <div class="report-card"><h4>🏠 Stock</h4><div class="report-number">${currentStock}</div></div>
        <div class="report-card"><h4>💰 Revenue</h4><div class="report-number">KES ${revenue.toLocaleString()}</div></div>
        <div class="report-card"><h4>📉 Cost</h4><div class="report-number">KES ${cost.toLocaleString()}</div></div>
        <div class="report-card"><h4>📈 Profit</h4><div class="report-number">KES ${profit.toLocaleString()}</div></div>
    `;
}

// ============================================
// RECEIPT FUNCTIONS
// ============================================
function generateReceipt(orderNumber, items, total, customer, phone, email) {
    var receiptBody = document.getElementById('receiptBody');
    if (!receiptBody) return;
    var html = `
        <div class="receipt-header">
            <h2>🚀 SPACEWISE ELECTRONICS</h2>
            <p style="font-weight:600;">Order #${orderNumber}</p>
            <p style="font-size:13px; color:#7f8c8d;">Date: ${new Date().toLocaleString()}</p>
            <p style="font-size:13px; color:#7f8c8d;">Customer: ${customer}</p>
            <p style="font-size:13px; color:#7f8c8d;">Phone: ${phone}</p>
            ${email ? '<p style="font-size:13px; color:#7f8c8d;">Email: ' + email + '</p>' : ''}
            <p style="font-size:13px; color:#7f8c8d;">Staff: ${currentUser ? currentUser.name : 'Unknown'}</p>
        </div>
        <div style="margin:10px 0;">
    `;
    items.forEach(function(item) {
        html += '<div class="receipt-item"><span>' + item.productName + ' x' + item.quantity + '</span><span>KES ' + (item.price * item.quantity).toLocaleString() + '</span></div>';
    });
    html += `
        </div>
        <div class="receipt-total">Total: KES ${total.toLocaleString()}</div>
        <div style="text-align:center; margin-top:15px; font-size:12px; color:#95a5a6;">Thank you for shopping at SPACEWISE!</div>
    `;
    receiptBody.innerHTML = html;
    document.getElementById('receiptModal').style.display = 'flex';
}

function closeReceipt() { document.getElementById('receiptModal').style.display = 'none'; }

function printReceipt() {
    var content = document.getElementById('receiptBody');
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Receipt</title><style>body{font-family:"Inter",sans-serif;padding:20px;max-width:400px;margin:auto;}.receipt-header{text-align:center;border-bottom:2px dashed #ccc;padding-bottom:12px;margin-bottom:12px;}.receipt-item{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #eee;}.receipt-total{font-size:20px;font-weight:700;text-align:right;margin-top:12px;padding-top:12px;border-top:2px solid #333;color:#27ae60;}.receipt-footer{text-align:center;margin-top:15px;font-size:12px;color:#7f8c8d;}</style></head><body>');
    printWindow.document.write(content.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function downloadReceipt() {
    var content = document.getElementById('receiptBody');
    var html = '<html><head><title>Receipt</title><style>body{font-family:"Inter",sans-serif;padding:20px;max-width:400px;margin:auto;}.receipt-header{text-align:center;border-bottom:2px dashed #ccc;padding-bottom:12px;margin-bottom:12px;}.receipt-item{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #eee;}.receipt-total{font-size:20px;font-weight:700;text-align:right;margin-top:12px;padding-top:12px;border-top:2px solid #333;color:#27ae60;}.receipt-footer{text-align:center;margin-top:15px;font-size:12px;color:#7f8c8d;}</style></head><body>';
    var fullHtml = html + content.innerHTML + '</body></html>';
    var blob = new Blob([fullHtml], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'Receipt_' + Date.now() + '.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================
// BADGE FUNCTIONS
// ============================================
function updateAllBadges() {
    DB = getDB();
    var cartTotalQty = DB.cart.reduce(function(sum, item) { return sum + item.quantity; }, 0);
    var el = function(id) { return document.getElementById(id); };
    if (el('cartBadge')) el('cartBadge').textContent = cartTotalQty;
    if (el('cartCount')) el('cartCount').textContent = cartTotalQty;
    if (el('cartBadgeTop')) el('cartBadgeTop').textContent = cartTotalQty;
    if (el('navCartBadge')) el('navCartBadge').textContent = cartTotalQty;
    if (el('dashCartBadge')) el('dashCartBadge').textContent = cartTotalQty;
    if (el('goodsInBadge')) el('goodsInBadge').textContent = DB.goodsIn.length;
    if (el('stockBadge')) el('stockBadge').textContent = DB.stock.reduce(function(sum, i) { return sum + i.quantity; }, 0);
    if (el('goodsOutBadge')) el('goodsOutBadge').textContent = DB.goodsOut.length;
    if (el('goodsInCount')) el('goodsInCount').textContent = DB.goodsIn.length;
    if (el('stockCount')) el('stockCount').textContent = DB.stock.reduce(function(sum, i) { return sum + i.quantity; }, 0);
    if (el('goodsOutCount')) el('goodsOutCount').textContent = DB.goodsOut.length;
    if (el('navGoodsInBadge')) el('navGoodsInBadge').textContent = DB.goodsIn.length;
    if (el('navStockBadge')) el('navStockBadge').textContent = DB.stock.reduce(function(sum, i) { return sum + i.quantity; }, 0);
    if (el('navGoodsOutBadge')) el('navGoodsOutBadge').textContent = DB.goodsOut.length;
}

// ============================================
// PAGE INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize database
    DB = initDB();
    renderQuotes();
    updateAllBadges();
    
    var path = window.location.pathname;
    if (path.indexOf('dashboard.html') !== -1) {
        loadDashboard();
    } else if (path.indexOf('admin.html') !== -1) {
        loadAdmin();
    }
});

console.log('🚀 SPACEWISE ELECTRONICS v2.0 loaded successfully!');
console.log('👑 Default admin password: admin123');
console.log('💡 Staff login: email only (no password)');
console.log('💡 Admin login: click "Admin Login" link, enter password');
console.log('💡 If you forgot the password, reset it in admin panel');
function saveFavicon() {
    var url = document.getElementById('faviconInput').value.trim();
    if (url) {
        DB = getDB();
        DB.favicon = url;
        saveDB(DB);
        
        var link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'shortcut icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = url;
        showMessage('adminMessage', 'success', '✅ Favicon updated!');
    }
}
