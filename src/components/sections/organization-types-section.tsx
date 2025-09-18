'use client';
import React from 'react';
import CustomAccordion, { AccordionItemData } from '@/components/ui/accordion-custom';

const offlineAccordionItems: AccordionItemData[] = [
    { title: '📝 1. التخطيط (Planning)', content: `<p>القسم المتخصص في تخطيط وهيكلة الحدث وتقسيم أعضاء التنظيم ووضع اكثر من خطة لإدارة أي حدث.</p><h5 class="font-bold mt-4 mb-2 text-primary">أدوات مساعدة:</h5><ul class="list-disc list-inside space-y-2"><li><b>خطة 5Ws:</b> لتحديد أساسيات الخطة (What/Why/Where/Who/When).</li><li><b>الخريطة الذهنية:</b> أداة لتنظيم الأفكار بطريقة مرنة وسهلة.</li><li><b>تحليل SWOT:</b> لتقييم نقاط القوة، والضعف، والفرص، والتهديدات.</li></ul>` },
    { title: '🚚 2. القسم اللوجيستي (Logistics)', content: '<p>هو القسم المتخصص في امـــداد المعدات اللازمة للحدث من حيث: الصوت – الإضاءة – السماعات – الدروع والشهادات – المقاعد – الديكور.</p>' },
    { title: '🤝 3. الــتنســيـق (Co-ordination)', content: '<p>هو القسم المتخصص في التنسيق بين اللجان وإدارة الأنشطة وتنسيق الفاعليات وعمل حركة وصل بين اللجان ومتابعة سير العمل حتي انتهاء الحدث.</p>' },
    { title: '📋 4. الــتســجيل (Registration)', content: `<p>هو القسم المسؤول عن تجميع بيانات الحضور وتسجيلها قبل دخول الحدث.</p>
    <h5 class="font-bold mt-4 mb-2 text-primary">تسجيل الحضور العادي (Regular Registration):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>🚶‍♂️ تخصيص بوابات خاصة بالزوار بعد دراسة المداخل والمخارج.</li>
      <li>✍️ يتم التسجيل بطريقتين: إلكتروني أو يدوي.</li>
      <li>🔄 تنظيم صفوف الدخول والخروج لمنع التكدس.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">تسجيل كبار الزوار (VIP Registration):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>⭐ تخصيص فريق تسجيل على أعلى مستوى.</li>
      <li>👋 تحية الضيوف المهمين والترحيب بهم وتوجيههم ومرافقتهم إلى مقاعدهم.</li>
      <li>📄 إعداد قائمة بالشخصيات المهمة وتأكيد حضورهم.</li>
      <li>🚪 توفير مداخل خاصة بهم.</li>
    </ul>
    <p class="mt-4"><b class="text-primary">المهارات المطلوبة:</b> القدرة على رؤية الصورة الكبيرة، التكيف مع المواقف، العمل تحت ضغط، مهارات حل المشكلات، إدارة التوتر.</p>` },
    { title: '🤵 5. المراسم واستقبال كبار الشخصيات', content: `<p>هو القسم المسؤول عن تنظيم المراسم الرسمية مع مراعاة التقاليد الاحترافية من حيث تحديد أماكن جلوسهم ثم استقبال الشخصيات المرموقة ومرافقتهم الى مكان الضيافة ثم مكان الحدث.</p>
    <div class="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
      <div>
        <h5 class="font-bold mb-2 text-primary">المهام:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>✔️ عمل قائمة لكبار الزوار تحتوي على الاسم والمنصب ورقم الكرسي.</li>
          <li>✔️ تنظيم صعود ونزول الشخصية المهمة من وإلى المسرح.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-primary">كيفية الاستقبال:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>😊 ابتسامة لطيفة وسؤال الضيف عن اسمه بكل احترام.</li>
          <li>🚶‍♂️ مرافقته إلى مكانه مع الحفاظ على مسافة مناسبة.</li>
          <li>👍 تسهيل أي إجراءات أو تحركات له.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-primary">أثناء الحدث:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>🤫 الوقوف بهدوء وتركيز.</li>
          <li>📵 عدم الانشغال بالهاتف أو أي شيء آخر.</li>
          <li>🙋‍♂️ تنفيذ طلبات كبار الزوار.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-primary">نقاط مهمة في التواصل (الإتيكيت):</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>🤫 لا تقاطع حديث من يتكلم.</li>
          <li>😄 احتفظ بابتسامة دائمة ووجه بشوش.</li>
          <li>📏 حافظ على مسافة الأمان (متر واحد).</li>
          <li>👔 لا تخرج عن الدائرة الرسمية في المناداة.</li>
          <li>🚫 تجنب الحوارات الطويلة والنقد وكن مستمعًا جيدًا.</li>
          <li>⏰ الدقة في المواعيد والطلبات.</li>
        </ul>
      </div>
    </div>` },
    { title: '🎪 6. تنظيم موقع الحدث (Floor Team)', content: `<h5 class="font-bold mb-2 text-primary">قبل الايفنت (التنسيق قبل الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ التأكد من القاعة والموقع.</li>
      <li>✔️ ترتيب المكان والمقاعد ووضع الملصقات الدعائية.</li>
      <li>✔️ توفير الإجراءات الاحترازية.</li>
      <li>✔️ التأكد من كشف أسماء الحضور وعددهم.</li>
      <li>✔️ تجهيز وسائل العرض والاستعداد التام للحفل.</li>
      <li>✔️ التأكد من وصول المشروبات والمأكولات.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">أثناء الايفنت (التنسيق أثناء الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ استقبال وتوصيل الحضور لمقاعدهم وتنظيم عملية الدخول.</li>
      <li>✔️ متابعة الحضور لتلبية احتياجاتهم.</li>
      <li>✔️ الحفاظ على نظافة المكان والهدوء.</li>
      <li>✔️ توزيع المشروبات والهدايا إن وجدت.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">بعد الايفنت (التنسيق بعد الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ تنظيم عملية الخروج.</li>
      <li>✔️ الحرص على عدم وجود أي تكدس أثناء الخروج.</li>
      <li>✔️ الحفاظ على نظافة المكان وسلامته.</li>
    </ul>` },
    { title: '🎭 7. فريق الكواليس (Backstage Team)', content: `<p>الفريق المخصص لتحضير الترتيبات قبل واثناء الحدث مثل ( تجهيز الشهادات والدروع – مساعدة المتحدث – العروض التقديمية – التأكد من تجهيزات الصوت والضوء ).</p>
    <h5 class="font-bold mt-4 mb-2 text-primary">في الأماكن المفتوحة (Open Area):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>🤫 ضرورة توفير الهدوء التام لمنع تشتيت انتباه المتحدث والضيوف.</li>
      <li>🚫 منع أي ضيف من التواجد في المنطقة، وتخصيصها للفريق المسؤول فقط.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">في الأماكن المغلقة (Close Area):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✅ سهولة السيطرة على المكان ويوفر خصوصية أعلى.</li>
      <li>🤝 إمكانية استخدامه في الاجتماعات التنظيمية الطارئة.</li>
    </ul>
     <h5 class="font-bold mt-4 mb-2 text-primary">اعتبارات عامة:</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>➡️ تنظيم الدخول والخروج بنظام صارم.</li>
      <li>🎤 توفير جميع المستلزمات للمتحدثين والفنيين.</li>
      <li>📞 وجود وسائل اتصال فعالة مع الفريق في الصالة الرئيسية.</li>
      <li>🕓 الاحتفاظ بجدول زمني واضح للمتحدثين والأنشطة.</li>
    </ul>` },
    { title: '🚑 8. فـريق الطوارئ والأزمــــــات (Emergency Team)', content: '<p>هو الفريق المسؤول عن حل المشكلات والأزمات الطارئة خلال الحدث مثل النزاعات والمشاكل وتقديم الإسعافات الأولية.</p>' }
];

const onlineAccordionItems: AccordionItemData[] = [
    { title: '🧑‍💻 معلومات عنا ودور المنظمين', content: `<p>هو نوع من أنواع التنظيم ولكن يتم علي نطاق الاونلاين فقط في خلال محاضرة أو فعالية اونلاين. يشمل دورهم الإشراف على تنفيذها، إدارة الحضور والتواصل مع المشاركين، وضمان أن تجري الأنشطة بسلاسة وفقًا للأهداف المحددة.</p>
    <h5 class="font-bold mt-4 mb-2 text-primary">دور المنظمين اونلاين:</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ وضع خطة شاملة للسيشن او المحاضرة واختيار المنصة المناسبة وتجهيز الأدوات التقنية.</li>
      <li>✔️ التواصل مع المدربين والتأكد من جاهزيتهم.</li>
      <li>✔️ تجهيز المنصة وتنسيق جميع الجوانب التقنية.</li>
      <li>✔️ تسجيل الحضور ومتابعتهم وإجابة أسئلتهم.</li>
      <li>✔️ تقديم دعم تقني في حال واجهوا مشكلات أثناء المحاضرة.</li>
      <li>✔️ متابعة المشاركين عبر الدردشة أو التعليقات والإجابة على أسئلتهم لضمان التفاعل الإيجابي.</li>
    </ul>` },
    { title: 'Stages مراحل تنظيم المحاضرات عبر الإنترنت', content: `<ul class="list-decimal list-inside space-y-4">
      <li><b class="font-semibold text-primary">📢 البداية الأساسية:</b> يتم عمل جروب للتسويق للمحاضرة من حيث شير في كل مكان وشير بوست الفيسبوك من كافة اللجان لوجود عدد كبير في المحاضرة.</li>
      <li><b class="font-semibold text-primary">1️⃣ المرحلة الأولى (الأعداد والتنفيذ):</b>
        <ul class="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>التنسيق مع لجنة التدريب الموفرة لهذه المحاضرة.</li>
            <li>اعداد الجروب الخاص بالمحاضرة.</li>
            <li>التواصل مع المدرب والتأكد من جاهزيته.</li>
            <li>جمع معلومات شاملة عن المحاضرة واعداد المعلومات الجديرة بالذكر للمحاضرة.</li>
            <li>اعداد الأسئلة التحفيزية لجمهور تتعلق بمحتوي المحاضرة قبل ابلاغ الحاضرين بمعاد المحاضرة مع السيشن.</li>
            <li>اعداد التعليمات الخاصة بالمحاضرة للمجهور المستفيد مثل وقت المحاضرة واوقات الأستراحة وتسجيل الحضور.</li>
        </ul>
      </li>
      <li><b class="font-semibold text-primary">2️⃣ المرحلة الثانية (تنظيم المجموعة):</b> بعد اعداد الجروب تبدأ مهمة التواصل مع الجمهور:
         <ul class="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>التعريف بنفسك كمنظم للمحاضرة.</li>
            <li>التحدث برسالة تحفيزية عن موضوع المحاضرة.</li>
            <li>ارسال اسئلة تحفيزية تساعد على جذب اهتمام الجمهور.</li>
            <li>ارسال تنبيهات على مدار ساعتين فى اليوم الموعود.</li>
            <li>ارسال تعليمات مهمة و معدة مسبقا للحضور.</li>
            <li>شكر الجمهور على اهتمامهم للحضور.</li>
        </ul>
      </li>
      <li><b class="font-semibold text-primary">3️⃣ المرحلة الثالثة (تنظيم المحاضرة):</b>
        <ul class="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>اجراء اختبار تقني مع المدرب للتأكد من الشبكة او اي اجراءات اخرى.</li>
            <li>الحرص على الهدوء ومنع الضوضاء.</li>
            <li>تسجيل الحضور للأعضاء المستفيدة بالتنسيق مع الموارد البشرية.</li>
            <li>تنبيه المدرب بخصوص اسئلة الأعضاء فى حالة عدم ملاحظتة.</li>
            <li>او تخصيص فقرة اسئلة مع المدرب والأعضاء.</li>
            <li>عرض العروض التقديمية الخاصة بالمدرب اذا تطلب الأمر.</li>
        </ul>
      </li>
    </ul>` },
    { title: '🔗 التنسيق بين اللجان', content: `<p>يتم التنسيق المستمر مع لجان الاتحاد المختلفة لضمان نجاح الفعالية الرقمية:</p>
    <ul class="list-disc list-inside space-y-2 mt-2">
      <li><b>لجنة التدريب والتطوير:</b> من حيث معرفة يوم المحاضرة ومعاد المحاضرة.</li>
      <li><b>المحاضر:</b> يتم التنسيق مع المحاضر في يوم المحاضرة لمعرفة اذا كان المحاضر جاهز او لا تجنبا لحدوث أي مشكلة في المحاضرة.</li>
      <li><b>الموارد البشرية:</b> يتم التنسيق مع الموارد البشرية قبل المحاضرة والعمل علي لينك الحضور ولينك التقييم.</li>
      <li><b>لجنة الميديا:</b> يتم التنسيق مع الميديا لشهادة الحضور.</li>
      <li><b>التنظيم يوم المحاضرة:</b> ما تم التنسيق به قبل المحاضرة يتم تنسيقه خلال المحاضرة من خلال شغل كل لجنة.</li>
    </ul>` }
];

const eventGoalsItems: AccordionItemData[] = [
    { 
        title: '🎯 الغاية من إقامة الأحداث', 
        content: `<ul class="space-y-3 text-base">
                        <li><b class="font-semibold text-primary">📚 نقل المعلومات:</b> وسيلة لنقل المعرفة إلى الجمهور المستهدف.</li>
                        <li><b class="font-semibold text-primary">🤝 تبادل الخبرات:</b> فرصة للمشاركين للتفاعل وتبادل الأفكار.</li>
                        <li><b class="font-semibold text-primary">🌐 تعزيز التواصل:</b> بناء علاقات وشبكات جديدة وتوسيع دائرة المعارف.</li>
                        <li><b class="font-semibold text-primary">📈 تعزيز العلامة التجارية:</b> الترويج للشركات وزيادة الوعي بالعلامة التجارية.</li>
                        <li><b class="font-semibold text-primary">📢 التوعية:</b> زيادة الوعي بقضايا معينة أو الدعوة إلى العمل.</li>
                        <li><b class="font-semibold text-primary">🏆 التكريم والاحتفال:</b> الاحتفاء بمناسبات خاصة أو تكريم أفراد على إنجازاتهم.</li>
                    </ul>` 
    },
    { 
        title: '✅ عوامل نجاح الفعاليات', 
        content: `<ul class="space-y-3 text-base">
                        <li><b class="font-semibold text-primary">🎯 التخطيط الجيد:</b> تحديد الأهداف، واختيار الجمهور، ووضع برنامج زمني.</li>
                        <li><b class="font-semibold text-primary">📍 المكان المناسب:</b> اختيار مكان مناسب من حيث المساحة والتجهيزات.</li>
                        <li><b class="font-semibold text-primary">✨ البرنامج الفعال:</b> تقديم برنامج مثير للاهتمام يلبي احتياجات الجمهور.</li>
                        <li><b class="font-semibold text-primary">🎤 المتحدثون والخبراء:</b> اختيار متحدثين أكفاء لتقديم محتوى ذي قيمة.</li>
                        <li><b class="font-semibold text-primary">🚀 التسويق والترويج:</b> جذب أكبر عدد من المشاركين.</li>
                        <li><b class="font-semibold text-primary">📱 التواصل مع المشاركين:</b> التواصل المستمر مع الجمهور قبل وبعد الحدث.</li>
                    </ul>` 
    },
    { 
        title: '👁️ رؤيتنا', 
        content: `<p class="text-base leading-relaxed">نسعى لتنظيم فعاليات استثنائية تترك بصمة إيجابية، وتساهم في تطوير مهارات الشباب وخلق فرص جديدة لهم، مع الالتزام بأعلى معايير الاحترافية والإبداع في كل خطوة.</p>` 
    }
];

export default function OrganizationTypesSection() {
    return (
        <section id="organization-types" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">أنواع التنظيم ومساراته</h2>
            <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 text-muted-foreground">
                ينقسم عمل لجنة التنظيم إلى مسارين رئيسيين لكل منهما طبيعته الخاصة ومتطلباته. استكشف تفاصيل كل نوع وكيفية عمل فرقه المتخصصة.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="card-custom rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">🎪 التنظيم الميداني</h3>
                    <CustomAccordion items={offlineAccordionItems} />
                </div>
                <div className="card-custom rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">💻 التنظيم الرقمي</h3>
                    <CustomAccordion items={onlineAccordionItems} />
                </div>
            </div>

            <div className="mt-12">
                <CustomAccordion items={eventGoalsItems} type="multiple" />
            </div>
        </section>
    );
}
