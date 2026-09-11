/**
 * =========================================================================
 * بخش ۱: داده‌های مشترک و اصلی (Global Data)
 * مورد استفاده در: تمامی صفحات (تغذیه کننده دیتای محصولات در کل سایت)
 * =========================================================================
 */
const ALL_STORE_PRODUCTS = [
    { 
        id: 'd1', 
        name: 'کرم ضد آفتاب بی‌رنگ سوپراستار', 
        price: 185.000, 
        category: ['sbd5', 'brand-1', 'post5', 'amlkard-3'], 
        img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop', 
        spec: '۵۰ میلی لیتر', 
        desc: 'ضد آفتاب تخصصی سوپراستار نفیس با پوشش‌دهی بالاو محافظت کامل در برابر اشعه‌های UVA و UVB.' 
    },
    { 
        id: 'd2', 
        name: 'شامپو ضد ریزش مو بلک بری', 
        price: 145.000, 
        category: ['sbd6', 'brand-2', 'hair-4', 'amlkard-13'], 
        img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'شامپو تقویت‌کننده و ضد ریزش تخصصی حاوی عصاره کافئین و سلول بنیادی.' 
    },
    { 
        id: 'd3', 
        name: 'سرم صورت حاوی ویتامین C بلک بری', 
        price: 210.000, 
        category: ['sbd5', 'brand-2', 'post5', 'amlkard-6', 'amlkard-9'], 
        img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop', 
        spec: '۳۰ میلی لیتر', 
        desc: 'سرم جوانساز و روشن‌کننده پوست حاوی ویتامین سی پایدار و سلول بنیادی.' 
    },
    { 
        id: 'd4', 
        name: 'ژل شستشوی صورت ضد جوش ام‌ان‌دی', 
        price: 125.000, 
        category: ['sbd5', 'brand-1', 'post2', 'amlkard-1', 'amlkard-10'], 
        img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'فیس واش تخصصی پوست‌های چرب و آکنه‌ای از لاین MND نفیس.' 
    },
    { 
        id: 'd5', 
        name: 'کرم آبرسان قوی پوست خشک ام‌ان‌دی', 
        price: 165.000, 
        category: ['sbd5', 'brand-1', 'post1', 'amlkard-2'], 
        img: 'https://images.unsplash.com/photo-1611078583485-6bbd92a955cb?q=80&w=600&auto=format&fit=crop', 
        spec: '۵۰ میلی لیتر', 
        desc: 'این کرم با نفوذ به لایه‌های عمقی پوست، بافت‌های آسیب‌دیده را بازسازی کرده.' 
    },
    { 
        id: 'd6', 
        name: 'روغن آرگان خالص الین بیوتی', 
        price: 195.000, 
        category: ['sbd6', 'brand-3', 'hair-2', 'hair-5', 'amlkard-12', 'amlkard-16'], 
        img: 'https://images.unsplash.com/photo-1626508035298-4ae4ddc2653f?q=80&w=600&auto=format&fit=crop', 
        spec: '۷۵ میلی لیتر', 
        desc: 'روغن آرگان طبیعی مراقبت از پوست و مو از لاین الین بیوتی.' 
    },
    { 
        id: 'd7', 
        name: 'کرم رفع ترک پا سوپراستار', 
        price: 65.000, 
        category: ['sbd3', 'brand-1', 'post1', 'amlkard-8'], 
        img: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰۰ میلی لیتر', 
        desc: 'حاوی عصاره‌های گیاهی مرطوب‌کننده و موم زنبور عسل جهت ترمیم سریع ترک‌ها.' 
    },
    { 
        id: 'd8', 
        name: 'خمیر دندان سفید کننده دنتالند', 
        price: 58.000, 
        category: ['sbd8', 'brand-5', 'amlkard-17'], 
        img: 'https://images.unsplash.com/photo-1559599189-ddfb520debc2?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰۰ میلی لیتر', 
        desc: 'خمیر دندان تخصصی سفیدکننده دنتالند، پاک‌کننده قوی پلاک‌ها.' 
    },
    { 
        id: 'd9', 
        name: 'بادی اسپلش زنانه مدل Love Time', 
        price: 115.000, 
        category: ['sbd9', 'brand-6'], 
        img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۵۰ میلی لیتر', 
        desc: 'خوشبوکننده مستقیم بدن با رایحه گلی و خنک فانتزی.' 
    },
    { 
        id: 'd10', 
        name: 'کرم دور چشم سه کاره ام‌ان‌دی', 
        price: 180.000, 
        category: ['sbd5', 'brand-1', 'post5', 'amlkard-7'], 
        img: 'https://images.unsplash.com/photo-1580870059868-faa615ec66fa?q=80&w=600&auto=format&fit=crop', 
        spec: '۳۰ میلی لیتر', 
        desc: 'فرمولاسیون پیشرفته جهت رفع همزمان پف دور چشم، تیرگی و هاله‌های سیاه اطراف پلک.' 
    },
    { 
        id: 'd11', 
        name: 'اسکراب صورت حاوی عصاره زردآلو', 
        price: 78.000, 
        category: ['sbd5', 'brand-1', 'post5', 'amlkard-5'], 
        img: 'https://images.unsplash.com/photo-1615397323862-520e5c8e3cc0?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰۰ میلی لیتر', 
        desc: 'لایه بردار ملایم پوست حاوی دانه‌های طبیعی هسته زردآلو.' 
    },
    { 
        id: 'd12', 
        name: 'تونر پاک کننده صورت پوست چرب ام‌ان‌دی', 
        price: 88.000, 
        category: ['sbd5', 'brand-1', 'post2', 'amlkard-4'], 
        img: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۵۰ میلی لیتر', 
        desc: 'تنظیم‌کننده pH سطح پوست و پاک‌کننده نهایی باقی‌مانده لوازم آرایشی.' 
    },
    { 
        id: 'd13', 
        name: 'پک ضد لک و روشن کننده فشرده MND', 
        price: 490.000, 
        category: ['sbd5', 'brand-1', 'post5', 'amlkard-9'], 
        img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop', 
        spec: 'دوره فشرده', 
        desc: 'پک تخصصی شامل کرم اسکراب، کرم روشن‌کننده روز و کرم ضد لک شب.' 
    },
    { 
        id: 'd14', 
        name: 'سرم موی حاوی کریستال و سیلیس سوپراستار', 
        price: 130.000, 
        category: ['sbd6', 'brand-1', 'hair-2', 'amlkard-12'], 
        img: 'https://images.unsplash.com/photo-1585232025345-d8dc2846f481?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰۰ میلی لیتر', 
        desc: 'سرم کریستال نفیس جهت ایجاد لایه محافظ روی تارهای مو.' 
    },
    { 
        id: 'd15', 
        name: 'کرم ضد چروک فوری ام‌ان‌دی', 
        price: 295.000, 
        category: ['sbd5', 'brand-1', 'post5', 'amlkard-6'], 
        img: 'https://images.unsplash.com/photo-1601049541289-9b1b7ce3259c?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۵ میلی لیتر', 
        desc: 'کرم لیفتینگ پپتیدی با اثر فوری زیر ۱۰ دقیقه جهت صاف کردن موقت چروک.' 
    },
    { 
        id: 'd16', 
        name: 'شامپو بدن حاوی عصاره نعناع و خیار', 
        price: 62.000, 
        category: ['sbd3', 'brand-1', 'amlkard-11'], 
        img: 'https://images.unsplash.com/photo-1608248593856-11f26e632860?q=80&w=600&auto=format&fit=crop', 
        spec: '۴۰۰ میلی لیتر', 
        desc: 'شامپو بدن خنک‌کننده سوپراستار با حس تازگی فوق‌العاده.' 
    },
    { 
        id: 'd17', 
        name: 'کرم ژل آبرسان پوست چرب سوپراستار', 
        price: 89.000, 
        category: ['sbd5', 'brand-1', 'post2', 'amlkard-2'], 
        img: 'https://images.unsplash.com/photo-1570194065650-d60fd23b70a2?q=80&w=600&auto=format&fit=crop', 
        spec: '۷۵ میلی لیتر', 
        desc: 'فرمولاسیون بسیار سبک بر پایه آب بدون هیچ‌گونه منشا چربی.' 
    },
    { 
        id: 'd18', 
        name: 'ماسک صورت ذغال اکتیو (بلک ماسک)', 
        price: 58.000, 
        category: ['sbd5', 'brand-1', 'post2', 'amlkard-5', 'amlkard-10'], 
        img: 'https://images.unsplash.com/photo-1551021434-22b270a31dfb?q=80&w=600&auto=format&fit=crop', 
        spec: '۷۵ میلی لیتر', 
        desc: 'ماسک پیل‌آف حاوی کربن فعال جهت جذب چربی‌های زائد داخل منافذ.' 
    },
    { 
        id: 'd19', 
        name: 'شامپو بچه ملایم سوپراستار', 
        price: 48.000, 
        category: ['sbd7', 'brand-1', 'amlkard-11'], 
        img: 'https://images.unsplash.com/photo-1524222835726-8e7d4530b8e2?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'بدون سوزش چشم و فرمولاسیون فوق‌العاده ایمن جهت شستشوی موی کودکان.' 
    },
    { 
        id: 'd20', 
        name: 'شامپو تخصصی کف سر چرب سوپراستار', 
        price: 74.000, 
        category: ['sbd6', 'brand-1', 'hair-1', 'amlkard-11'], 
        img: 'https://images.unsplash.com/photo-1580870058865-c3f25330a84e?q=80&w=600&auto=format&fit=crop', 
        spec: '۳۰۰ میلی لیتر', 
        desc: 'پاکسازی قوی سبوم پوست سر، به تاخیر انداختن روند چرب شدن.' 
    },
    { 
        id: 'd21', 
        name: 'خمیر دندان تخصصی لثه و دندان حساس', 
        price: 65.000, 
        category: ['sbd8', 'brand-5', 'amlkard-18'], 
        img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰۰ میلی لیتر', 
        desc: 'محافظت تخصصی از مینای دندان‌های حساس و کاهش دردهای ناگهانی.' 
    },
    { 
        id: 'd22', 
        name: 'شامپو ضد شوره قوی سوپراستار', 
        price: 85.000, 
        category: ['sbd6', 'brand-1', 'hair-3', 'amlkard-15'], 
        img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop', 
        spec: '۴۰۰ میلی لیتر', 
        desc: 'حاوی مواد کلیمبازول و پیروکتون اولامین جهت ریشه‌کن کردن شوره‌های مقاوم.' 
    },
    { 
        id: 'd23', 
        name: 'سرم ضد ریزش ابرو ام‌ان‌دی', 
        price: 175.000, 
        category: ['sbd5', 'brand-1', 'amlkard-14'], 
        img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰ میلی لیتر', 
        desc: 'محلول تخصصی حاوی پپتیدها و عصاره‌های گیاهی تقویت‌کننده فولیکول ابرو.' 
    },
    { 
        id: 'd24', 
        name: 'کرم پودر پمپی مات سوپراستار', 
        price: 160.000, 
        category: ['sbd1', 'brand-1', 'post5'], 
        img: 'https://images.unsplash.com/photo-1631214500515-e4aca0a2bc5f?q=80&w=600&auto=format&fit=crop', 
        spec: '۴۰ میلی لیتر', 
        desc: 'کرم پودر آرایشی با بافت سبک و مخملی، پوشش‌دهی کامل.' 
    },
    { 
        id: 'd25', 
        name: 'بالم لب نرم کننده توت فرنگی', 
        price: 35.000, 
        category: ['sbd1', 'brand-1', 'post1'], 
        img: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=600&auto=format&fit=crop', 
        spec: '۴.۵ گرم', 
        desc: 'بالم لب ویتامینه جهت رفع خشکی و پوسته پوسته شدن لب‌ها.' 
    },
    { 
        id: 'd26', 
        name: 'کرم ترمیم کننده پوست آسیب دیده MND', 
        price: 165.000, 
        category: ['sbd5', 'brand-1', 'post4', 'amlkard-8'], 
        img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop', 
        spec: '۳۰ میلی لیتر', 
        desc: 'کرم ترمیم‌کننده قوی جهت تسریع بهبود زخم‌ها، جای بخیه.' 
    },
    { 
        id: 'd27', 
        name: 'کرم مرطوب کننده حاوی اوره ۱۰٪ سوپراستار', 
        price: 92.000, 
        category: ['sbd3', 'brand-1', 'post1', 'amlkard-2'], 
        img: 'https://images.unsplash.com/photo-1611078583485-6bbd92a955cb?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰۰ میلی لیتر', 
        desc: 'کرم تخصصی پوست‌های بسیار خشک، اگزمادار و پوسته پوسته شده.' 
    },
    { 
        id: 'd28', 
        name: 'ژل بهداشتی بانوان سوپراستار', 
        price: 52.000, 
        category: ['sbd3', 'brand-1', 'post4', 'amlkard-1'], 
        img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۵۰ میلی لیتر', 
        desc: 'فرمولاسیون ملایم با تنظیم دقیق pH ناحیه ژنیتال.' 
    },
    { 
        id: 'd29', 
        name: 'شامپو موهای رنگ شده سوپراستار', 
        price: 68.000, 
        category: ['sbd6', 'brand-1', 'hair-5', 'amlkard-16'], 
        img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop', 
        spec: '۴۰۰ میلی لیتر', 
        desc: 'حاوی فیلترهای محافظتی UV و عصاره انار جهت تثبیت پیگمنت‌های رنگ مو.' 
    },
    { 
        id: 'd30', 
        name: 'ماسک موی بدون آبکشی حاوی طلا سوپراستار', 
        price: 185.000, 
        category: ['sbd6', 'brand-1', 'hair-2', 'amlkard-12', 'amlkard-16'], 
        img: 'https://images.unsplash.com/photo-1615397323862-520e5c8e3cc0?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'کرم موی بعد از حمام حاوی ذرات طلا و ابریشم مایع.' 
    },
    { 
        id: 'd31', 
        name: 'کرم ژل ضد سلولیت ام‌ان‌دی', 
        price: 220.000, 
        category: ['sbd3', 'brand-1', 'amlkard-20', 'amlkard-21'], 
        img: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'کرم موضعی لاغری و رفع سلولیت، حاوی کافئین و ال‌کارنیتین.' 
    },
    { 
        id: 'd32', 
        name: 'کرم مغذی شب حاوی کوآنزیم Q10', 
        price: 260.000, 
        category: ['sbd5', 'brand-1', 'post3', 'amlkard-6'], 
        img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop', 
        spec: '۵۰ میلی لیتر', 
        desc: 'تغذیه بافت پوست در زمان استراحت شبانه، حاوی کیوتن فعال.' 
    },
    { 
        id: 'd33', 
        name: 'کرم مرطوب کننده دست شیر و عسل', 
        price: 55.000, 
        category: ['sbd3', 'brand-1', 'post5', 'amlkard-2'], 
        img: 'https://images.unsplash.com/photo-1611078583485-6bbd92a955cb?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'کرم کاسه‌ای سوپراستار غنی شده با پروتئین شیر و عصاره طبیعی عسل.' 
    },
    { 
        id: 'd34', 
        name: 'کرم لایه بردار ملایم AHA ام‌ان‌دی', 
        price: 140.000, 
        category: ['sbd5', 'brand-1', 'post5', 'amlkard-5', 'amlkard-9'], 
        img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop', 
        spec: '۳۰ میلی لیتر', 
        desc: 'کرم غلیظ لایه‌بردار جهت استفاده موضعی روی لک‌های قهوه‌ای.' 
    },
    { 
        id: 'd35', 
        name: 'شامپو تقویت کننده مو حاوی جینسینگ', 
        price: 82.000, 
        category: ['sbd6', 'brand-1', 'hair-4', 'amlkard-13'], 
        img: 'https://images.unsplash.com/photo-1580870058865-c3f25330a84e?q=80&w=600&auto=format&fit=crop', 
        spec: '۴۰۰ میلی لیتر', 
        desc: 'حاوی عصاره ریشه جینسینگ جهت انرژی‌رسانی به ریشه موهای کدر.' 
    },
    { 
        id: 'd36', 
        name: 'کرم پودر تیوپی رویال دی', 
        price: 150.000, 
        category: ['sbd1', 'brand-4', 'post5'], 
        img: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=600&auto=format&fit=crop', 
        spec: '۳۵ میلی لیتر', 
        desc: 'کرم پودر روزانه با ساختار مات و مخملی از لاین رویال دی.' 
    },
    { 
        id: 'd37', 
        name: 'لوسیون خنک کننده بدن اسطوخودوس', 
        price: 98.000, 
        category: ['sbd3', 'brand-1', 'post4', 'amlkard-19'], 
        img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'بادی لوسیون آرامش‌بخش شرکت نفیس. این محصول خشکی بعد از استحمام را رفع می‌کند.' 
    },
    { 
        id: 'd38', 
        name: 'ژل شستشوی صورت پوست حساس ام‌ان‌دی', 
        price: 125.000, 
        category: ['sbd5', 'brand-1', 'post4', 'amlkard-1', 'amlkard-8'], 
        img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'بدون مواد صابونی سنگین، حاوی عصاره بابونه و آلوئه‌ورا.' 
    },
    { 
        id: 'd39', 
        name: 'میسلار واتر پاک کننده آرایش چشم و صورت', 
        price: 69.000, 
        category: ['sbd5', 'brand-1', 'post5', 'amlkard-1'], 
        img: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۲۰ میلی لیتر', 
        desc: 'محلول پاک‌کننده دوفاز تخصصی مخصوص تمیز کردن ریمل‌های ضد آب.' 
    },
    { 
        id: 'd40', 
        name: 'اسپری دئودورانت بدن زنانه Love Time', 
        price: 95.000, 
        category: ['sbd9', 'brand-6'], 
        img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۵۰ میلی لیتر', 
        desc: 'اسپری خوشبوکننده و ضدتعریق بانوان با ماندگاری ۲۴ ساعته.' 
    },
    { 
        id: 'd41', 
        name: 'روغن ماساژ بدن آرامش‌بخش سوپراستار', 
        price: 140.000, 
        category: ['sbd3', 'brand-1', 'amlkard-19'], 
        img: 'https://images.unsplash.com/photo-1608248593856-11f26e632860?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'روغن گرم‌کننده و تسکین‌دهنده دردهای عضلانی و کوفتگی بدن.' 
    },
    { 
        id: 'd42', 
        name: 'پک ضد ریزش موی فشرده بلک بری', 
        price: 390.000, 
        category: ['sbd6', 'brand-2', 'hair-4', 'amlkard-13'], 
        img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop', 
        spec: '۳ محصوله', 
        desc: 'مجموعه درمانی شامل شامپو مکمل، تونیک پپتیدی تقویت‌کننده و ماسک ریشه مو.' 
    },
    { 
        id: 'd43', 
        name: 'صابون گیاهی روشن کننده زردچوبه', 
        price: 38.000, 
        category: ['sbd3', 'brand-1', 'post5', 'amlkard-1', 'amlkard-9'], 
        img: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۰۰ گرم', 
        desc: 'صابون گیاهی نفیس حاوی عصاره خالص زردچوبه جهت کمک به رفع تیرگی.' 
    },
    { 
        id: 'd44', 
        name: 'کرم نرم کننده حاوی روغن آووکادو', 
        price: 64.000, 
        category: ['sbd3', 'brand-1', 'post1', 'amlkard-2'], 
        img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'سرشار از ویتامین‌های A، D و E، مرطوب‌کننده عالی.' 
    },
    { 
        id: 'd45', 
        name: 'شامپو روزانه حاوی عصاره آلوئه ورا', 
        price: 55.000, 
        category: ['sbd6', 'brand-1', 'hair-2', 'amlkard-11'], 
        img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop', 
        spec: '۴۰۰ میلی لیتر', 
        desc: 'شامپو ملایم روزانه سوپراستار جهت حفظ رطوبت طبیعی ساقه‌های مو.' 
    },
    { 
        id: 'd46', 
        name: 'کرم پودر فاقد چربی بلک بری', 
        price: 240.000, 
        category: ['sbd1', 'brand-2', 'post2'], 
        img: 'https://images.unsplash.com/photo-1631214500515-e4aca0a2bc5f?q=80&w=600&auto=format&fit=crop', 
        spec: '۳۰ میلی لیتر', 
        desc: 'کرم پودر لوکس حاوی سلول‌های بنیادی، کاملاً فاقد چربی با جلوه کاملاً مات.' 
    },
    { 
        id: 'd47', 
        name: 'ژل موی سر قوی سوپراستار', 
        price: 45.000, 
        category: ['sbd6', 'brand-1', 'amlkard-12'], 
        img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۰۰ میلی لیتر', 
        desc: 'حالت‌دهنده قوی تارهای مو با ماندگاری طولانی‌مدت بدون ایجاد سفیدک.' 
    },
    { 
        id: 'd48', 
        name: 'اسپری نرم کننده موی دوفاز سوپراستار', 
        price: 98.000, 
        category: ['sbd6', 'brand-1', 'hair-2', 'hair-5', 'amlkard-12', 'amlkard-16'], 
        img: 'https://images.unsplash.com/photo-1585232025345-d8dc2846f481?q=80&w=600&auto=format&fit=crop', 
        spec: '۲۵۰ میلی لیتر', 
        desc: 'اسپری دوفاز حاوی سرم و کراتین جهت باز کردن سریع گره‌های مو.' 
    },
    { 
        id: 'd49', 
        name: 'ریمل حجم دهنده الین بیوتی', 
        price: 135.000, 
        category: ['sbd1', 'brand-3'], 
        img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop', 
        spec: '۱۲ میلی لیتر', 
        desc: 'ریمل حجم‌دهنده و بلندکننده مژه لاین الین بیوتی با رنگدانه‌های کاملاً مشکی.' 
    },
    { 
        id: 'd50', 
        name: 'لیف کتان لایه بردار (سبد جانبی)', 
        price: 25.000, 
        category: ['sbd4', 'brand-1'], 
        img: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=600&auto=format&fit=crop', 
        spec: 'تک عددی', 
        desc: 'لیف کتان طبیعی مخصوص اسکراب و لایه‌برداری فیزیکی پوست بدن در حمام.' 
    }
];

/**
 * =========================================================================
 * بخش ۲: منوهای ناوبری و فیلترهای عمومی
 * مورد استفاده در: صفحات هدردار مشترک (index.html, shop.html و غیره)
 * =========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // مدیریت باز و بسته شدن همه منوهای کشویی (اصلی و فرعی) در هدر صفحات
    const toggles = document.querySelectorAll(".dropdown-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const parentDropdown = toggle.parentElement;
            parentDropdown.classList.toggle("open");
        });
    });

    // مدیریت کلیک روی آیتم‌های دسته‌بندی و فیلتر (مثلاً در منو یا سایدبار)
    const filterItems = document.querySelectorAll(".category-item");

    filterItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation(); 

            // حذف کلاس active از تمام فیلترها
            filterItems.forEach(el => el.classList.remove("active"));
            
            // فعال کردن فیلتر کلیک شده
            item.classList.add("active");

            // دریافت کد فیلتر برای پردازش‌های بعدی شما
            const filterValue = item.getAttribute("data-filter");
            console.log("فیلتر اعمال شد:", filterValue);
        });
    });
});
/**
 * =========================================================================
 * بخش ۱: دیتابیس لوکال و مدیریت سشن کاربران
 * =========================================================================
 */
let currentLoggedUser = JSON.parse(localStorage.getItem('kole_current_user')) || null;
let registeredUsersStore = JSON.parse(localStorage.getItem('kole_users_store')) || [
    { 
        name: 'گالری ماتیک', 
        email: 'admin@kole.com', 
        password: '123456', 
        phone: '09121111111', 
        idcard: '0012345678', 
        bankcard: '۶۰۳۷-۹۹۱۹-۱۲۳۴-۵۶۷۸', 
        orders: [
            { id: 'K-9821', date: '۱۴۰۵/۰۱/۱۲', price: 1399000, status: 'success' },
            { id: 'K-1044', date: '۱۴۰۵/۰۲/۲۸', price: 125000, status: 'pending' }
        ], 
        addresses: [{ title: 'دفتر مرکزی', text: 'تهران، میدان ونک، برج نئون، طبقه ۵، واحد ۱۲' }] 
    }
];

let globalCart = JSON.parse(localStorage.getItem('hyper_kole_cart')) || [];

document.addEventListener("DOMContentLoaded", () => {
    // مدیریت تب‌های ورود و ثبت نام
    const tabLogin = document.getElementById('tab-login-btn');
    const tabRegister = document.getElementById('tab-register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (tabLogin && tabRegister) {
        tabLogin.addEventListener('click', () => {
            tabLogin.classList.add('active'); tabRegister.classList.remove('active');
            loginForm.classList.add('active'); registerForm.classList.remove('active');
        });
        tabRegister.addEventListener('click', () => {
            tabRegister.classList.add('active'); tabLogin.classList.remove('active');
            registerForm.classList.add('active'); loginForm.classList.remove('active');
        });
    }

    // لاجیک فرم ورود
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value;

            const user = registeredUsersStore.find(u => u.email === email && u.password === pass);
            if (user) {
                currentLoggedUser = user;
                localStorage.setItem('kole_current_user', JSON.stringify(currentLoggedUser));
                triggerToastNotification("خوش آمدید! ورود موفقیت‌آمیز بود. ✨");
                evaluateUserSessionGate();
            } else {
                triggerToastNotification("ایمیل یا رمز عبور اشتباه است! ❌");
            }
        });
    }

    // لاجیک فرم ثبت نام
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const phone = document.getElementById('reg-phone').value.trim();
            const pass = document.getElementById('reg-password').value;

            if (registeredUsersStore.some(u => u.email === email)) {
                triggerToastNotification("این ایمیل قبلاً ثبت شده است! ⚠️");
                return;
            }

            const newUser = { name, email, phone, password: pass, orders: [], addresses: [] };
            registeredUsersStore.push(newUser);
            localStorage.setItem('kole_users_store', JSON.stringify(registeredUsersStore));
            
            currentLoggedUser = newUser;
            localStorage.setItem('kole_current_user', JSON.stringify(currentLoggedUser));
            triggerToastNotification("حساب کاربری شما با موفقیت ساخته شد! 🎉");
            evaluateUserSessionGate();
        });
    }

    // سوئیچ کردن بین منوهای سایدبار پروفایل
    const menuLinks = document.querySelectorAll('.panel-menu-links li[data-target]');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(el => el.classList.remove('active'));
            link.classList.add('active');

            const targetId = link.getAttribute('data-target');
            document.querySelectorAll('.panel-sub-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');
        });
    });

    // سابمیت فرم تکمیلی پروفایل
    const advancedProfileForm = document.getElementById('advanced-profile-form');
    if (advancedProfileForm) {
        advancedProfileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!currentLoggedUser) return;

            currentLoggedUser.name = document.getElementById('prof-username').value.trim();
            currentLoggedUser.phone = document.getElementById('prof-phone').value.trim();
            currentLoggedUser.idcard = document.getElementById('prof-idcard').value.trim();
            currentLoggedUser.bankcard = document.getElementById('prof-bankcard').value.trim();

            // همگام سازی با استور کل کاربران
            const idx = registeredUsersStore.findIndex(u => u.email === currentLoggedUser.email);
            if (idx !== -1) registeredUsersStore[idx] = currentLoggedUser;

            localStorage.setItem('kole_users_store', JSON.stringify(registeredUsersStore));
            localStorage.setItem('kole_current_user', JSON.stringify(currentLoggedUser));

            document.getElementById('display-user-name').innerText = currentLoggedUser.name;
            triggerToastNotification("اطلاعات شما با موفقیت بروزرسانی شد. 💾");
        });
    }

    // ثبت آدرس جدید
    const panelAddressForm = document.getElementById('panel-address-form');
    if (panelAddressForm) {
        panelAddressForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!currentLoggedUser) return;

            const title = document.getElementById('addr-title').value.trim();
            const text = document.getElementById('addr-full').value.trim();

            if (!currentLoggedUser.addresses) currentLoggedUser.addresses = [];
            currentLoggedUser.addresses.push({ title, text });

            const idx = registeredUsersStore.findIndex(u => u.email === currentLoggedUser.email);
            if (idx !== -1) registeredUsersStore[idx].addresses = currentLoggedUser.addresses;

            localStorage.setItem('kole_users_store', JSON.stringify(registeredUsersStore));
            localStorage.setItem('kole_current_user', JSON.stringify(currentLoggedUser));

            panelAddressForm.reset();
            renderAddressesList();
            triggerToastNotification("آدرس جدید اضافه شد پستی شد. 🗺️");
        });
    }

    // دکمه خروج از حساب
    const logoutBtn = document.getElementById('account-logout-trigger');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            currentLoggedUser = null;
            localStorage.removeItem('kole_current_user');
            triggerToastNotification("با موفقیت از حساب کاربری خارج شدید. 👋");
            evaluateUserSessionGate();
        });
    }

    // دکمه منوی موبایل
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // اجرای لود اولیه
    evaluateUserSessionGate();
    renderGlobalCartUI();
});

/**
 * =========================================================================
 * بخش ۲: توابع مدیریت و کنترل پویای رابط کاربری پنل
 * =========================================================================
 */
function evaluateUserSessionGate() {
    const authBox = document.getElementById('auth-box-card');
    const dashboardCard = document.getElementById('dashboard-panel-card');

    if (currentLoggedUser) {
        if (authBox) authBox.style.display = 'none';
        if (dashboardCard) {
            dashboardCard.classList.remove('hidden');
            dashboardCard.style.display = 'block';

            // ست کردن مقادیر فیلدها
            document.getElementById('display-user-name').innerText = currentLoggedUser.name;
            document.getElementById('prof-username').value = currentLoggedUser.name;
            document.getElementById('prof-email').value = currentLoggedUser.email;
            document.getElementById('prof-phone').value = currentLoggedUser.phone || '';
            document.getElementById('prof-idcard').value = currentLoggedUser.idcard || '';
            document.getElementById('prof-bankcard').value = currentLoggedUser.bankcard || '';

            renderOrdersTable();
            renderAddressesList();
        }
    } else {
        if (authBox) authBox.style.display = 'block';
        if (dashboardCard) {
            dashboardCard.classList.add('hidden');
            dashboardCard.style.display = 'none';
        }
    }
}

function renderAddressesList() {
    const container = document.getElementById('user-addresses-list-box');
    if (!container) return;

    if (!currentLoggedUser.addresses || currentLoggedUser.addresses.length === 0) {
        container.innerHTML = `<p style="color:#888; text-align:center; padding:15px;">دفترچه آدرس شما خالی است.</p>`;
        return;
    }

    container.innerHTML = currentLoggedUser.addresses.map((addr, idx) => `
        <div class="address-item-card">
            <div>
                <h5>📍 ${addr.title}</h5>
                <p>${addr.text}</p>
            </div>
            <i class='bx bx-trash delete-addr-btn' onclick="deleteUserAddress(${idx})"></i>
        </div>
    `).join('');
}

window.deleteUserAddress = function(index) {
    if (!currentLoggedUser.addresses) return;
    currentLoggedUser.addresses.splice(index, 1);

    const idx = registeredUsersStore.findIndex(u => u.email === currentLoggedUser.email);
    if (idx !== -1) registeredUsersStore[idx].addresses = currentLoggedUser.addresses;

    localStorage.setItem('kole_users_store', JSON.stringify(registeredUsersStore));
    localStorage.setItem('kole_current_user', JSON.stringify(currentLoggedUser));
    renderAddressesList();
    triggerToastNotification("آدرس انتخابی حذف شد.");
};

function renderOrdersTable() {
    const tbody = document.getElementById('orders-table-rows');
    if (!tbody) return;

    if (!currentLoggedUser.orders || currentLoggedUser.orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#888; padding:20px;">هیچ سفارشی ثبت نشده است.</td></tr>`;
        return;
    }

    tbody.innerHTML = currentLoggedUser.orders.map(order => `
        <tr>
            <td>#${order.id}</td>
            <td>${order.date}</td>
            <td>
                <span class="badge-status ${order.status === 'success' ? 'success' : 'pending'}">
                    ${order.status === 'success' ? 'تحویل شده' : 'در حال پردازش'}
                </span>
            </td>
            <td>${order.price.toLocaleString()} تومان</td>
        </tr>
    `).join('');
}

// توابع سبد خرید عمومی هدر
function renderGlobalCartUI() {
    const countBadge = document.getElementById('cart-count');
    if (countBadge) countBadge.innerText = globalCart.length;
}

function triggerToastNotification(text) {
    const box = document.getElementById('toast-container');
    if (!box) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = text;
    box.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

// سیستم سوئیچ تم لایت و دارک
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if(localStorage.getItem('theme') === 'light') {
        body.classList.remove('dark-mode');
        body.classList.remove('dark-shop-body');
        if(themeToggle) themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
    } else {
        body.classList.add('dark-mode');
        if(themeToggle) themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.innerHTML = isDark ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
        });
    }
});

/**
 * =========================================================================
 * بخش ۶: موتور فیلتر، جستجو و رندر محصولات گرید فروشگاه
 * مورد استفاده در: صفحه فروشگاه یا کاتالوگ محصولات (shop.html)
 * =========================================================================
 */
// این تابع را پیدا کن و کل آن را با این کد جدید جایگزین کن
function drawShopProducts(productsList) {
    const gridContainer = document.getElementById('dynamic-products-grid');
    if (!gridContainer) return;

    if (productsList.length === 0) {
        gridContainer.innerHTML = `<p style="color: #aaa; text-align: center; grid-column: 1/-1; padding: 40px 0;">هیچ محصولی با این مشخصات یافت نشد!</p>`;
        return;
    }

    // فیکس قطعی سی‌اس‌اس: ساختار HTML دقیقاً مو به مو بر اساس سلکتورهای فایل shop.css شما بازنویسی شد
    gridContainer.innerHTML = productsList.map(product => `
        <div class="product-card">
            <div class="product-img-box">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-info-box">
                <h4>${product.name}</h4>
                <p class="product-spec">${product.spec || ''}</p>
                <div class="product-bottom-bar">
                    <span class="product-price">${product.price.toFixed(3)} تومان</span>
                    <a href="product.html?id=${product.id}" class="view-product-btn">
                        <i class='bx bx-show'></i> مشاهده
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// مدیریت کلیک روی دسته‌بندی‌ها و فیکس باگ لود اولیه صفحه فروشگاه
document.addEventListener("DOMContentLoaded", () => {
    const categoryItems = document.querySelectorAll('.category-item');
    
    // تابع دیباگ شده برای فیلتر همزمان بر اساس دسته‌بندی آرایه‌ای و قیمت
    function applyCurrentFilters(selectedFilter) {
        if (typeof CURRENT_SHOP_FILTER !== 'undefined') {
            CURRENT_SHOP_FILTER = selectedFilter;
        }

        const filteredProducts = ALL_STORE_PRODUCTS.filter(product => {
            // ۱. بررسی دسته‌بندی (پشتیبانی از ساختار آرایه‌ای جدید)
            let matchesCategory = false;
            if (selectedFilter === 'all' || !selectedFilter) {
                matchesCategory = true;
            } else if (Array.isArray(product.category)) {
                matchesCategory = product.category.includes(selectedFilter);
            } else {
                matchesCategory = (product.category === selectedFilter);
            }

            // ۲. بررسی قیمت (ضرب در ۱۰۰۰ برای هماهنگی مقدار عددی اسلایدر با دیتابیس)
            let matchesPrice = true;
            if (typeof CURRENT_MAX_PRICE !== 'undefined') {
                matchesPrice = (product.price * 1000) <= (CURRENT_MAX_PRICE * 1000);
            }

            return matchesCategory && matchesPrice;
        });

        drawShopProducts(filteredProducts);
    }

    // حل باگ لود اولیه: محصولات به محض ورود به صفحه اتوماتیک و بدون نیاز به کلیک رندر می‌شوند
    const activeItem = document.querySelector('.category-item.active');
    const initialFilter = activeItem ? activeItem.getAttribute('data-filter') : 'all';
    applyCurrentFilters(initialFilter);

    // اعمال فیلتر هنگام کلیک روی آیتم‌های منو
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); 
            
            categoryItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');

            const selectedFilter = item.getAttribute('data-filter') || 'all';
            applyCurrentFilters(selectedFilter);
        });
    });
});

/**
 * =========================================================================
 * بخش ۷: سیستم کامنت‌گذاری قدیمی و رندر اولیه ساختار صفحه محصول
 * مورد استفاده در: صفحه جزئیات محصول (product.html)
 * =========================================================================
 */
const singleProductPage = document.getElementById('single-product-page');

// تابع کمکی برای ثبت لایک/دیسلایک کامنت‌های ساختگی (Mock)
function renderCommentsList() {
    const listWrap = document.getElementById('comments-list-wrapper');
    if (!listWrap) return;
    listWrap.innerHTML = '';
    mockComments.forEach(c => {
        listWrap.insertAdjacentHTML('beforeend', `
            <div class="comment-node">
                <div class="comment-meta"><span>توسط <strong>${c.user}</strong></span><span>${c.date}</span></div>
                <p>${c.text}</p>
                <div class="comment-actions">
                    <span onclick="voteComment(${c.id}, 'like')"><i class='bx bx-like'></i> (${c.likes})</span>
                    <span onclick="voteComment(${c.id}, 'dislike')"><i class='bx bx-dislike'></i> (${c.dislikes})</span>
                </div>
            </div>
        `);
    });
}

window.voteComment = function(id, type) {
    const target = mockComments.find(c => c.id === id);
    if (target) {
        if (type === 'like') target.likes++;
        else target.dislikes++;
        renderCommentsList();
        triggerToastNotification("رای شما با موفقیت ثبت شد 👍");
    }
};

// تزریق دیتای پویا به ساختار HTML صفحه product.html بر اساس ID موجود در آدرس URL
if (singleProductPage) {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id') || 'd1';
    const product = ALL_STORE_PRODUCTS.find(p => p.id === prodId);

    if (product) {
    
        let PRODUCT_COMMENTS_DB = JSON.parse(localStorage.getItem('kole_store_comments')) || {};
        
        singleProductPage.innerHTML = `
            <div class="product-details-grid">
                <div class="product-view-side"><img src="${product.img}" alt="img"></div>
                <div class="product-info-side">
                    <h1>${product.name}</h1>
                    <div class="product-price-row">$${product.price}</div>
                    <ul class="specs-list">
                        <li><strong>مشخصه فنی:</strong> <span>${product.spec}</span></li>
                        <li><strong>دسته‌بندی مارکت:</strong> <span>${product.category}</span></li>
                        <li><strong>گارانتی مرسوله:</strong> <span style="color:var(--gaming-cyan);">تضمین اصالت کول‌استور</span></li>
                    </ul>
                    <p style="color:#aaa; font-size:13px; line-height:1.7;">${product.desc}</p>
                    <button class="primary-buy-btn" onclick="addItemToCartDirect('${product.id}')">افزودن به سبد خرید</button>
                </div>
            </div>

            <div class="comments-layout-box">
                <h3>نظرات و دیدگاه‌های خریداران کالا</h3>
                <form class="comment-form" id="new-comment-form">
                    <input type="text" id="comm-name" placeholder="نام و نام خانوادگی شما..." required>
                    <textarea id="comm-text" rows="3" placeholder="دیدگاه تخصصی خود را در مورد کالا بنویسید..." required></textarea>
                    <button type="submit">ارسال و انتشار نظر</button>
                </form>
                <div id="comments-list-wrapper"></div>
            </div>
        `;

        // مدیریت رندر و ثبت اولین نسخه فرم کامنت در محصول (نسخه اول)
        function renderCommentsList() {
            const wrapper = document.getElementById('comments-list-wrapper');
            if (!wrapper) return;

            const currentComments = PRODUCT_COMMENTS_DB[product.id] || [];

            if (currentComments.length === 0) {
                wrapper.innerHTML = `<p style="color: #666; font-size: 0.9rem; text-align: center; padding: 20px 0;">هنوز هیچ نظری برای این کالا ثبت نشده است. اولین نظر را شما بنویسید!</p>`;
                return;
            }

            wrapper.innerHTML = currentComments.map(item => `
                <div class="single-comment-card" style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.04); padding: 15px 20px; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; text-align: right; direction: rtl;">
                    <div class="comment-meta" style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #888;">
                        <span class="comment-user-name" style="color: var(--gaming-magenta); font-weight: 600;"><i class='bx bx-user'></i> ${item.user}</span>
                        <span>${item.date}</span>
                    </div>
                    <div class="comment-text-content" style="font-size: 0.95rem; line-height: 1.6; color: #e0e0e0;">${item.text}</div>
                </div>
            `).join('');
        }

        renderCommentsList();

        document.getElementById('new-comment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('comm-name').value.trim();
            const text = document.getElementById('comm-text').value.trim();

            if (!name || !text) return;

            const newComment = { 
                id: Date.now(), 
                user: name, 
                date: 'امروز', 
                text: text
            };

            if (!PRODUCT_COMMENTS_DB[product.id]) {
                PRODUCT_COMMENTS_DB[product.id] = [];
            }

            PRODUCT_COMMENTS_DB[product.id].unshift(newComment);
            localStorage.setItem('kole_store_comments', JSON.stringify(PRODUCT_COMMENTS_DB));

            document.getElementById('comm-name').value = '';
            document.getElementById('comm-text').value = '';

            renderCommentsList();
            triggerToastNotification("دیدگاه شما ثبت و به صورت زنده نمایش داده شد!");
        });
    }
}

/**
 * =========================================================================
 * بخش ۸: چت آنلاین پشتیبانی (Live Chat Support Widget)
 * مورد استفاده در: تمامی صفحات دارای ویجت چت (پاپ آپ چت پایین صفحه)
 * =========================================================================
 */
const supportTrigger = document.getElementById('support-trigger');
const supportChatBox = document.getElementById('support-chat-box');
const closeChat = document.getElementById('close-chat');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessagesContainer = document.getElementById('chat-messages-container');

if (supportTrigger && supportChatBox && closeChat) {
    supportTrigger.addEventListener('click', () => supportChatBox.classList.add('active'));
    closeChat.addEventListener('click', () => supportChatBox.classList.remove('active'));
}

if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        chatMessagesContainer.insertAdjacentHTML('beforeend', `<div class="msg user">${text}</div>`);
        chatInput.value = '';
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

        // شبیه‌سازی پاسخ خودکار سیستم پشتیبانی
        setTimeout(() => {
            chatMessagesContainer.insertAdjacentHTML('beforeend', `<div class="msg system">پیام شما به کارشناس پشتیبانی ارجاع داده شد. بزودی پاسخگو خواهیم بود. سپاس از شکیبایی شما.</div>`);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }, 1500);
    });
}

/**
 * =========================================================================
 * بخش ۹: مدیریت سبد خرید پاپ‌آپ/سایدبار (Cart Sidebar & Operations)
 * مورد استفاده در: تمامی صفحات (قابل دسترسی در هدر یا سایدبار سبد خرید)
 * =========================================================================
 */
const cartTrigger = document.getElementById('cart-trigger-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');

if (cartTrigger && cartSidebar && closeCart) {
    cartTrigger.addEventListener('click', () => cartSidebar.classList.add('active'));
    closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));
}

// بروزرسانی ظاهر و آیتم‌های کشوی سبد خرید در کل سایت
function renderGlobalCartUI() {
    const badge = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalLabel = document.getElementById('cart-total-price');

    if (badge) badge.innerText = globalCart.length;
    if (!container) return;

    container.innerHTML = '';
    if (globalCart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#555; font-size:12px; margin-top:30px;">سبد خرید خالی است.</p>`;
        if (totalLabel) totalLabel.innerText = '$0.00';
        return;
    }

    let sum = 0;
    globalCart.forEach((item, index) => {
        sum += item.price;
        container.insertAdjacentHTML('beforeend', `
            <div class="cart-item">
                <img src="${item.img}" alt="img">
                <h4>${item.name}</h4>
                <i class='bx bx-trash' onclick="removeCartItemNode(${index})"></i>
            </div>
        `);
    });
    if (totalLabel) totalLabel.innerText = `$${sum.toFixed(2)}`;
}

// تابع سراسری افزودن مستقیم کالا به سبد خرید از هر کجای سایت
window.addItemToCartDirect = function(id) {
    const item = ALL_STORE_PRODUCTS.find(p => p.id === id);
    if (item) {
        globalCart.push(item);
        localStorage.setItem('hyper_kole_cart', JSON.stringify(globalCart));
        renderGlobalCartUI();
        triggerToastNotification(`"${item.name}" به سبد خرید اضافه شد 👌`);
    }
};

// حذف کالا از داخل سایدبار سبد خرید
window.removeCartItemNode = function(index) {
    globalCart.splice(index, 1);
    localStorage.setItem('hyper_kole_cart', JSON.stringify(globalCart));
    renderGlobalCartUI();
    triggerToastNotification("کالا از سبد خرید حذف شد.");
    if (document.getElementById('checkout-items-list')) renderCheckoutInvoice();
};

// نمایش اعلان‌های کوچک پاپ‌آپ (Toast Notification) در تمامی صفحات
function triggerToastNotification(text) {
    const box = document.getElementById('toast-container');
    if (!box) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = text;
    box.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

/**
 * =========================================================================
 * بخش ۱۰: صفحه نهایی کردن خرید و صدور فاکتور (Checkout Page)
 * مورد استفاده در: صفحه تسویه حساب یا نهایی کردن خرید (checkout.html)
 * =========================================================================
 */
const checkoutList = document.getElementById('checkout-items-list');
function renderCheckoutInvoice() {
    if (!checkoutList) return;
    checkoutList.innerHTML = '';
    let total = 0;
    globalCart.forEach(item => {
        total += item.price;
        checkoutList.insertAdjacentHTML('beforeend', `
            <div class="checkout-item-bill"><span>${item.name}</span><strong>$${item.price}</strong></div>
        `);
    });
    document.getElementById('checkout-final-price').innerText = `$${total.toFixed(2)}`;
}

const checkoutForm = document.getElementById('final-checkout-form');
if (checkoutForm) {
    renderCheckoutInvoice();
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!currentLoggedUser) {
            alert("جهت نهایی کردن خرید، ابتدا باید وارد حساب کاربری خود شوید.");
            window.location.href = "profile.html";
            return;
        }

        let total = 0;
        globalCart.forEach(item => total += item.price);
        
        if (total === 0) {
            triggerToastNotification("سبد خرید شما خالی است!");
            return;
        }

        if (!currentLoggedUser.orders) currentLoggedUser.orders = [];
        currentLoggedUser.orders.push({
            id: 'K-' + Math.floor(1000 + Math.random() * 9000),
            date: 'امروز',
            price: total,
            status: 'pending'
        });

        localStorage.setItem('kole_current_user', JSON.stringify(currentLoggedUser));
        syncCurrentUserToStore();

        triggerToastNotification("در حال اتصال به درگاه بانکی... 💳");
        setTimeout(() => {
            alert("تراکنش موفقیت‌آمیز بود! سفارش شما ثبت و در فرآیند ارسال قرار گرفت.");
            globalCart = [];
            localStorage.setItem('hyper_kole_cart', JSON.stringify(globalCart));
            window.location.href = "profile.html";
        }, 2000);
    });
}

/**
 * =========================================================================
 * بخش ۱۱: منوی موبایل و بخش درباره ما (Mobile Navigation Menu)
 * مورد استفاده در: ریسپانسیو صفحات در حالت موبایل و فوتر / مودال‌ها
 * =========================================================================
 */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // لود داینامیک لینک‌های منوی موبایل
    navMenu.innerHTML = `
        <a href="index.html"><i class='bx bx-home-alt'></i>خانه</a>
        <a href="shop.html"><i class='bx bx-search-alt'></i>محصولات</a>
        <a href="profile.html"><i class='bx bx-user-circle'></i> پنل کاربری</a>
        <a href="#about-us-section" id="about-us-trigger"><i class='bx bx-info-circle'></i> (درباره ما)</a>
    `;

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// مودال یا آلرت بخش درباره ما
const aboutUsTrigger = document.getElementById('about-us-trigger');
if (aboutUsTrigger) {
    aboutUsTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        alert("ℹ️ درباره کول‌استور:\nبزرگترین هایپرمارکت آنلاین نئونی با پشتیبانی ۲۴ ساعته و ارسال فوق‌سریع محصولات به سراسر کشور.");
    });
}

// لود اولیه وضعیت‌های سراسری سیستم در هنگام اجرای اولیه فایل جی‌اس
evaluateUserSessionGate();
renderGlobalCartUI();

/**
 * =========================================================================
 * بخش هیرو اسلایدر صفحه اصلی (Hero Slider Carousel - 5 Slides Fixed)
 * =========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".info-slide");
    const slideImages = document.querySelectorAll(".hero-slide-img"); // دریافت تمام عکس‌های اسلایدر
    const heroSection = document.querySelector(".hero-clean-section");
    const prevBtn = document.getElementById("hero-prev");
    const nextBtn = document.getElementById("hero-next");
    
    // ۵ گرادینت متمایز برای لایت مود
    const gradientsLight = [
        "radial-gradient(circle at 75% 30%, #e0f4ff 0%, var(--gaming-bg) 65%)", // آبی ملایم
        "radial-gradient(circle at 75% 30%, #ffe9e9 0%, var(--gaming-bg) 65%)", // صورتی/قرمز ملایم
        "radial-gradient(circle at 75% 30%, #e2faf1 0%, var(--gaming-bg) 65%)", // سبز پاستلی
        "radial-gradient(circle at 75% 30%, #fbf0df 0%, var(--gaming-bg) 65%)", // نارنجی/کرمی ملایم
        "radial-gradient(circle at 75% 30%, #f3e5f5 0%, var(--gaming-bg) 65%)"  // بنفش ملایم
    ];

    // ۵ گرادینت عمیق برای دارک مود
    const gradientsDark = [
        "radial-gradient(circle at 75% 30%, #1e293b 0%, var(--gaming-bg) 70%)",
        "radial-gradient(circle at 75% 30%, #3b1e1e 0%, var(--gaming-bg) 70%)",
        "radial-gradient(circle at 75% 30%, #1e3b2e 0%, var(--gaming-bg) 70%)",
        "radial-gradient(circle at 75% 30%, #3b2d1e 0%, var(--gaming-bg) 70%)",
        "radial-gradient(circle at 75% 30%, #2d1e3b 0%, var(--gaming-bg) 70%)"
    ];

    let currentSlideIndex = 0;
    let sliderInterval;

    function updateSlider(index) {
        if (slides.length === 0) return;

        // اصلاح ایندکس جهت چرخش دایره‌ای بین ۵ اسلاید
        if (index >= slides.length) currentSlideIndex = 0;
        else if (index < 0) currentSlideIndex = slides.length - 1;
        else currentSlideIndex = index;

        // ۱. مدیریت متون اسلاید
        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentSlideIndex].classList.add("active");

        // ۲. مدیریت و تغییر عکس اسلاید به صورت همزمان
        slideImages.forEach(img => img.classList.remove("active"));
        if (slideImages[currentSlideIndex]) {
            slideImages[currentSlideIndex].classList.add("active");
        }

        // ۳. تغییر پس‌زمینه بر اساس لایت/دارک مود
        const isDarkMode = document.body.classList.contains("dark-mode");
        if (heroSection) {
            heroSection.style.background = isDarkMode 
                ? gradientsDark[currentSlideIndex] 
                : gradientsLight[currentSlideIndex];
        }
    }

    function startAutoSlider() {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(() => {
            updateSlider(currentSlideIndex + 1);
        }, 6000); // جابه‌جایی خودکار هر ۶ ثانیه
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            updateSlider(currentSlideIndex + 1);
            startAutoSlider(); // ریست تایمر خودکار
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            updateSlider(currentSlideIndex - 1);
            startAutoSlider(); // ریست تایمر خودکار
        });
    }

    // همگام‌سازی بک‌گراند بلافاصله بعد از کلیک روی دکمه تغییر تم هدر
    const themeBtn = document.getElementById("dark-mode-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            setTimeout(() => {
                updateSlider(currentSlideIndex);
            }, 50);
        });
    }

    // اجرای اولیه اسلایدر در بدو ورود به صفحه
    updateSlider(0);
    startAutoSlider();
});

/**
 * =========================================================================
 * بخش ۱۳: موتور پیشرفته ثبت و نمایش دیدگاه‌های محصول (Comments Engine)
 * مورد استفاده در: صفحه تک محصول (product.html)
 * =========================================================================
 */
let PRODUCT_COMMENTS_DB = JSON.parse(localStorage.getItem('kole_store_comments')) || {};

function getCurrentPersianDate() {
    const today = new Date();
    return "۱۴۰۵/" + String(today.getMonth() + 1).padStart(2, '0') + "/" + String(today.getDate()).padStart(2, '0');
}

function runProductCommentsEngine() {
    const formWrapper = document.getElementById('comment-form-wrapper');
    const commentsListContainer = document.getElementById('product-comments-list');
    
    if (!formWrapper || !commentsListContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const currentProductId = urlParams.get('id') || 'd1';

    // تزریق فرم کامنت‌های پیشرفته در صفحه تک محصول product.html
    formWrapper.innerHTML = `
        <form id="add-comment-inner-form" style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 0.9rem; color: #aaa;">نام شما:</label>
                <input type="text" id="comment-user-field" placeholder="مثلاً: کاربر مهمان" style="width: 100%; max-width: 300px; padding: 10px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff; outline: none; font-size: 0.9rem;" required>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 0.9rem; color: #aaa;">متن نظر شما:</label>
                <textarea id="comment-msg-field" rows="4" placeholder="نظرتان را درباره این محصول بنویسید..." style="width: 100%; padding: 12px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff; outline: none; font-size: 0.95rem; resize: vertical;" required></textarea>
            </div>
            <button type="submit" class="submit-comment-btn" style="width: fit-content; align-self: flex-start; margin-top: 5px;">ارسال و ثبت نظر</button>
        </form>
    `;

    document.getElementById('add-comment-inner-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userName = document.getElementById('comment-user-field').value.trim();
        const commentText = document.getElementById('comment-msg-field').value.trim();
        
        if (!userName || !commentText) return;

        const newCommentObj = {
            id: Date.now(),
            user: userName,
            date: getCurrentPersianDate(),
            text: commentText
        };

        if (!PRODUCT_COMMENTS_DB[currentProductId]) {
            PRODUCT_COMMENTS_DB[currentProductId] = [];
        }
        PRODUCT_COMMENTS_DB[currentProductId].push(newCommentObj);
        
        localStorage.setItem('kole_store_comments', JSON.stringify(PRODUCT_COMMENTS_DB));

        document.getElementById('comment-msg-field').value = '';
        
        drawProductComments(currentProductId);

        if (typeof triggerToastNotification === 'function') {
            triggerToastNotification("نظر شما با موفقیت ثبت شد.");
        }
    });

    drawProductComments(currentProductId);
}

// رندر نهایی لیست کامنت‌های جدید در صفحه تک محصول product.html
function drawProductComments(productId) {
    const container = document.getElementById('product-comments-list');
    if (!container) return;

    const currentComments = PRODUCT_COMMENTS_DB[productId] || [];

    if (currentComments.length === 0) {
        container.innerHTML = `<p style="color: #666; font-size: 0.9rem; text-align: center; padding: 20px 0;">هنوز هیچ نظری برای این کالا ثبت نشده است. اولین نظر را شما بنویسید!</p>`;
        return;
    }

    container.innerHTML = currentComments.map(item => `
        <div class="single-comment-card" style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.04); padding: 15px 20px; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;">
            <div class="comment-meta" style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #888;">
                <span class="comment-user-name" style="color: var(--gaming-magenta); font-weight: 600;"><i class='bx bx-user'></i> ${item.user}</span>
                <span>${item.date}</span>
            </div>
            <div class="comment-text-content" style="font-size: 0.95rem; line-height: 1.6; color: #e0e0e0;">${item.text}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    runProductCommentsEngine();
});


// کد سرچ برای فایل main.js
const searchInput = document.querySelector('#product-search'); // فرض بر اینکه آیدی اینپوت شما این است

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const allCards = document.querySelectorAll('.product-card');

    allCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});



// =========================================================================
// سیستم هوشمند و سراسری مدیریت حالت تاریک برای تمامی صفحات گالری ماتیک
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // تابع همگام‌سازی وضعیت آیکون دکمه (ماه یا خورشید)
    function updateToggleIcon(isDark) {
        if (themeToggle) {
            themeToggle.innerHTML = isDark ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
        }
    }

    // ۱. بررسی وضعیت ذخیره شده در مرورگر یا کلاس‌های پیش‌فرض HTML
    const savedTheme = localStorage.getItem('theme');
    const hasDarkClass = body.classList.contains('dark-shop-body') || body.classList.contains('dark-mode');

    if (savedTheme === 'dark' || (!savedTheme && hasDarkClass)) {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    } else {
        body.classList.remove('dark-mode');
        body.classList.remove('dark-shop-body'); // حذف کلاس قدیمی برای یکپارچگی با متغیرهای تم روشن
        updateToggleIcon(false);
    }

    // ۲. عملکرد کلیک روی دکمه تغییر تم هدر
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // حذف کلاس فرعی اچ‌تی‌ام‌ال برای جلوگیری از تداخل کدهای قدیمی
            if(body.classList.contains('dark-shop-body')) {
                body.classList.remove('dark-shop-body');
            }

            const isDarkNow = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
            updateToggleIcon(isDarkNow);

            // در صورت وجود تابع توست، اعلان نمایش داده شود
            if (typeof triggerToastNotification === 'function') {
                triggerToastNotification(isDarkNow ? "حالت تاریک فعال شد 🌙" : "حالت روشن فعال شد ☀️");
            }
        });
    }
});












