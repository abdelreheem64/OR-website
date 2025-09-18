'use client';
import React from 'react';
import CustomAccordion, { AccordionItemData } from '@/components/ui/accordion-custom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const offlineAccordionItems: AccordionItemData[] = [
    { title: '📝 1. التخطيط (Planning)', content: `<div dir="rtl"><p>القسم اللي بيخطط ويبني هيكل الإيفينت، ويقسم أعضاء التنظيم، ويحط أكتر من خطة لإدارة أي حدث.</p><h5 class="font-bold mt-4 mb-2 text-black">أدوات مساعدة:</h5><ul class="list-disc list-inside space-y-2"><li><b>خطة 5Ws:</b> عشان تحدد أساسيات الخطة (إيه/ليه/فين/مين/إمتى).</li><li><b>الخريطة الذهنية:</b> أداة عشان تنظم أفكارك بطريقة سهلة ومرنة.</li><li><b>تحليل SWOT:</b> عشان تقيّم نقط القوة والضعف والفرص والتهديدات.</li></ul></div>` },
    { title: '🚚 2. القسم اللوجيستي (Logistics)', content: '<div dir="rtl"><p>القسم المسؤول عن توفير كل المعدات اللي محتاجها الإيفينت زي: الصوت - الإضاءة - السماعات - الدروع والشهادات - الكراسي - الديكور.</p></div>' },
    { title: '🤝 3. الــتنســيـق (Co-ordination)', content: '<div dir="rtl"><p>القسم اللي بينسق بين اللجان وبيدير الأنشطة والفعاليات، وبيكون حلقة وصل بين اللجان عشان يتابع الشغل ماشي إزاي لحد ما الإيفينت يخلص.</p></div>' },
    { title: '📋 4. الــتســجيل (Registration)', content: `<div dir="rtl"><p>القسم المسؤول عن تجميع بيانات الحاضرين وتسجيلها قبل ما يدخلوا الإيفينت.</p>
    <h5 class="font-bold mt-4 mb-2 text-black">تسجيل الحضور العادي (Regular Registration):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>🚶‍♂️ بنخصص بوابات للزوار بعد ما ندرس المداخل والمخارج كويس.</li>
      <li>✍️ التسجيل بيكون بطريقتين: إلكتروني أو يدوي.</li>
      <li>🔄 بننظم طوابير الدخول والخروج عشان نمنع الزحمة.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-black">تسجيل كبار الزوار (VIP Registration):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>⭐ بنخصص فريق تسجيل على أعلى مستوى.</li>
      <li>👋 بنحيي الضيوف المهمين ونرحب بيهم ونوصلهم لحد كراسيهم.</li>
      <li>📄 بنحضر قايمة بالشخصيات المهمة ونأكد حضورهم.</li>
      <li>🚪 بنوفرلهم مداخل خاصة بيهم.</li>
    </ul>
    <p class="mt-4"><b class="text-black">المهارات المطلوبة:</b> لازم تكون بتعرف تشوف الصورة كاملة، وتتأقلم مع المواقف، وتشتغل تحت ضغط، وتحل المشاكل، وتتحكم في التوتر.</p></div>` },
    { title: '🤵 5. المراسم واستقبال كبار الشخصيات', content: `<div dir="rtl"><p>القسم المسؤول عن تنظيم المراسم الرسمية وبيراعي التقاليد الاحترافية، زي تحديد أماكن جلوس كبار الشخصيات، استقبالهم، ومرافقتهم لمكان الضيافة وبعدين مكان الإيفينت.</p>
    <div class="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
      <div>
        <h5 class="font-bold mb-2 text-black">المهام:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>✔️ بنعمل قايمة لكبار الزوار فيها الاسم والمنصب ورقم الكرسي.</li>
          <li>✔️ بننظم صعود ونزول الشخصية المهمة من وإلى المسرح.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-black">إزاي بنستقبلهم:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>😊 ابتسامة لطيفة ونسأل الضيف عن اسمه بكل احترام.</li>
          <li>🚶‍♂️ بنرافقه لمكانه مع الحفاظ على مسافة مناسبة.</li>
          <li>👍 بنسهل أي إجراءات أو تحركات ليه.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-black">وقت الإيفينت:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>🤫 بنقف بهدوء وتركيز.</li>
          <li>📵 مش بننشغل بالموبايل أو أي حاجة تانية.</li>
          <li>🙋‍♂️ بننفذ طلبات كبار الزوار.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-black">نقط مهمة في الإتيكيت:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>🤫 متقاطعش حد وهو بيتكلم.</li>
          <li>😄 خليك مبتسم ووشك بشوش دايمًا.</li>
          <li>📏 حافظ على مسافة الأمان (متر واحد).</li>
          <li>👔 استخدم الألقاب الرسمية ومتخرجش عنها.</li>
          <li>🚫 بلاش حوارات طويلة ونقد، وخليك مستمع كويس.</li>
          <li>⏰ خليك دقيق في مواعيدك وطلباتك.</li>
        </ul>
      </div>
    </div></div>` },
    { title: '🎪 6. تنظيم موقع الحدث (Floor Team)', content: `<div dir="rtl"><h5 class="font-bold mb-2 text-black">قبل الإيفينت (التنسيق قبل الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ بنتأكد من القاعة والموقع.</li>
      <li>✔️ بنرتب المكان والكراسي ونحط البوسترات.</li>
      <li>✔️ بنوفر الإجراءات الاحترازية.</li>
      <li>✔️ بنتأكد من كشف أسماء الحاضرين وعددهم.</li>
      <li>✔️ بنجهز شاشات العرض ونستعد للحفل.</li>
      <li>✔️ بنتأكد من وصول المشروبات والأكل.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-black">وقت الإيفينت (التنسيق أثناء الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ بنستقبل الحاضرين ونوصلهم لكراسيهم وننظم الدخول.</li>
      <li>✔️ بنتابع الحاضرين عشان نلبي احتياجاتهم.</li>
      <li>✔️ بنحافظ على نضافة وهدوء المكان.</li>
      <li>✔️ بنوزع المشروبات والهدايا لو فيه.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-black">بعد الإيفينت (التنسيق بعد الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ بننظم عملية الخروج.</li>
      <li>✔️ بنحرص إنه ميكونش فيه أي زحمة وقت الخروج.</li>
      <li>✔️ بنحافظ على نضافة وسلامة المكان.</li>
    </ul></div>` },
    { title: '🎭 7. فريق الكواليس (Backstage Team)', content: `<div dir="rtl"><p>الفريق اللي بيحضر الترتيبات قبل وأثناء الإيفينت زي (تجهيز الشهادات والدروع - مساعدة المتحدث - تجهيز العروض التقديمية - التأكد من سلامة الصوت والضوء).</p>
    <h5 class="font-bold mt-4 mb-2 text-black">في الأماكن المفتوحة (Open Area):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>🤫 لازم نوفر هدوء تام عشان المتحدث والضيوف ميتشتتوش.</li>
      <li>🚫 بنمنع أي ضيف إنه يكون موجود في المنطقة دي، وبنخصصها للفريق المسؤول بس.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-black">في الأماكن المقفولة (Close Area):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✅ سهل نسيطر على المكان وبيوفر خصوصية أعلى.</li>
      <li>🤝 ممكن نستخدمه في الاجتماعات التنظيمية الطارئة.</li>
    </ul>
     <h5 class="font-bold mt-4 mb-2 text-black">حاجات عامة لازم نراعيها:</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>➡️ تنظيم الدخول والخروج بنظام صارم.</li>
      <li>🎤 توفير كل حاجة للمتحدثين والفنيين.</li>
      <li>📞 لازم يكون فيه وسائل تواصل فعالة مع الفريق في الصالة الرئيسية.</li>
      <li>🕓 نحافظ على جدول زمني واضح للمتحدثين والأنشطة.</li>
    </ul></div>` },
    { title: '🚑 8. فـريق الطوارئ والأزمــــــات (Emergency Team)', content: '<div dir="rtl"><p>الفريق المسؤول عن حل أي مشكلة أو أزمة تحصل فجأة وقت الإيفينت زي الخناقات أو المشاكل، وبيقدم الإسعافات الأولية.</p></div>' }
];

const onlineAccordionItems: AccordionItemData[] = [
    { title: '🧑‍💻 معلومات عننا ودور المنظمين', content: `<div dir="rtl"><p>ده نوع من التنظيم بس بيحصل أونلاين بس، في محاضرة أو فعالية على الإنترنت. دور المنظمين بيكون الإشراف على التنفيذ، إدارة الحاضرين والتواصل معاهم، وضمان إن كل حاجة تمشي بسلاسة حسب الأهداف.</p>
    <h5 class="font-bold mt-4 mb-2 text-black">دور المنظمين أونلاين:</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>✔️ بنحط خطة كاملة للسيشن أو المحاضرة، ونختار المنصة المناسبة ونجهز الأدوات التقنية.</li>
      <li>✔️ بنتواصل مع المدربين ونتأكد إنهم جاهزين.</li>
      <li>✔️ بنجهز المنصة وننسق كل الجوانب التقنية.</li>
      <li>✔️ بنسجل الحضور ونتابعهم ونجاوب على أسئلتهم.</li>
      <li>✔️ بنقدم دعم فني لو واجهوا أي مشاكل وقت المحاضرة.</li>
      <li>✔️ بنتابع المشاركين على الشات أو التعليقات ونجاوب على أسئلتهم عشان نضمن تفاعل إيجابي.</li>
    </ul></div>` },
    { title: 'Stages مراحل تنظيم المحاضرات عبر الإنترنت', content: `<div dir="rtl">
      <ul class="list-none space-y-4">
        <li>
          <b class="font-semibold text-black flex items-center">📢 البداية:</b>
          <p class="mt-1 pr-4">بنعمل جروب عشان نسوق للمحاضرة ونشير في كل حتة، وكل اللجان بتشير بوست الفيسبوك عشان نجمع أكبر عدد ممكن.</p>
        </li>
        <li>
          <b class="font-semibold text-black flex items-center">1️⃣ المرحلة الأولى (التحضير والتنفيذ):</b>
          <ul class="list-disc list-inside space-y-2 mt-2 pr-4">
            <li>التنسيق مع لجنة التدريب اللي بتوفر المحاضرة.</li>
            <li>تجهيز جروب المحاضرة.</li>
            <li>التواصل مع المدرب والتأكد من جاهزيته.</li>
            <li>جمع معلومات كاملة عن المحاضرة وتحضير أهم النقط اللي هتتقال.</li>
            <li>تجهيز أسئلة تحفيزية للجمهور ليها علاقة بمحتوى المحاضرة قبل ما نبلغهم بمعادها.</li>
            <li>تحضير التعليمات الخاصة بالمحاضرة للجمهور زي وقتها، أوقات الراحة، وتسجيل الحضور.</li>
          </ul>
        </li>
        <li>
          <b class="font-semibold text-black flex items-center">2️⃣ المرحلة الثانية (تنظيم الجروب):</b>
          <p class="mt-1 pr-4">بعد ما الجروب يجهز، بتبدأ مهمة التواصل مع الجمهور:</p>
          <ul class="list-disc list-inside space-y-2 mt-2 pr-4">
            <li>بنعرّف نفسنا كمنظمين للمحاضرة.</li>
            <li>بنتكلم برسالة تحفيزية عن موضوع المحاضرة.</li>
            <li>بنبعت أسئلة تحفيزية عشان نشد انتباه الجمهور.</li>
            <li>بنبعت تنبيهات كل ساعتين في يوم المحاضرة.</li>
            <li>بنبعت تعليمات مهمة ومتجهزة من قبل للحضور.</li>
            <li>بنشكر الجمهور على اهتمامهم وحضورهم.</li>
          </ul>
        </li>
        <li>
          <b class="font-semibold text-black flex items-center">3️⃣ المرحلة الثالثة (تنظيم المحاضرة):</b>
          <ul class="list-disc list-inside space-y-2 mt-2 pr-4">
            <li>بنعمل اختبار تقني مع المدرب عشان نتأكد من الشبكة وأي حاجة تانية.</li>
            <li>بنحرص على الهدوء ومنع أي دوشة.</li>
            <li>بنسجل حضور الأعضاء المستفيدين بالتنسيق مع الموارد البشرية.</li>
            <li>بننبّه المدرب لو فيه أسئلة من الأعضاء وهو مش واخد باله.</li>
            <li>أو بنخصص فقرة للأسئلة بين المدرب والأعضاء.</li>
            <li>بنعرض البريزنتيشن الخاص بالمدرب لو احتاج.</li>
          </ul>
        </li>
      </ul>
    </div>` },
    { title: '🔗 التنسيق بين اللجان', content: `<div dir="rtl"><p>بيكون فيه تنسيق مستمر مع لجان الاتحاد المختلفة عشان نضمن نجاح الفعالية الديجيتال:</p>
    <ul class="list-disc list-inside space-y-2 mt-2">
      <li><b>لجنة التدريب والتطوير:</b> عشان نعرف يوم ومعاد المحاضرة.</li>
      <li><b>المحاضر:</b> بنتواصل مع المحاضر يوم المحاضرة عشان نتأكد إنه جاهز ونتجنب أي مشكلة.</li>
      <li><b>الموارد البشرية:</b> بننسق معاهم قبل المحاضرة عشان نجهز لينك الحضور ولينك التقييم.</li>
      <li><b>لجنة الميديا:</b> بننسق معاهم عشان شهادات الحضور.</li>
      <li><b>التنظيم يوم المحاضرة:</b> كل اللي اتفقنا عليه قبل المحاضرة بيتنفذ وقتها، وكل لجنة بتقوم بدورها.</li>
    </ul></div>` }
];

const eventGoalsItems: AccordionItemData[] = [
    { 
        title: '🎯 الهدف من عمل الإيفينتات', 
        content: `<div dir="rtl"><ul class="space-y-3 text-base">
                        <li><b class="font-semibold text-black">📚 توصيل معلومات:</b> طريقة عشان نوصل معرفة للجمهور المستهدف.</li>
                        <li><b class="font-semibold text-black">🤝 تبادل خبرات:</b> فرصة للمشاركين عشان يتفاعلوا ويتبادلوا الأفكار.</li>
                        <li><b class="font-semibold text-black">🌐 زيادة التواصل:</b> بناء علاقات وشبكات جديدة وتوسيع دايرة المعارف.</li>
                        <li><b class="font-semibold text-black">📈 تقوية البراند:</b> بنعمل ترويج للشركات ونزوّد الوعي بيها.</li>
                        <li><b class="font-semibold text-black">📢 التوعية:</b> زيادة الوعي بقضايا معينة أو الدعوة لعمل حاجة.</li>
                        <li><b class="font-semibold text-black">🏆 التكريم والاحتفال:</b> بنحتفل بمناسبات خاصة أو بنكرّم ناس على إنجازاتهم.</li>
                    </ul></div>` 
    },
    { 
        title: '✅ عوامل نجاح الفعاليات', 
        content: `<div dir="rtl"><ul class="space-y-3 text-base">
                        <li><b class="font-semibold text-black">🎯 التخطيط الكويس:</b> نحدد الأهداف، ونختار الجمهور، ونحط برنامج زمني.</li>
                        <li><b class="font-semibold text-black">📍 المكان المناسب:</b> نختار مكان مناسب من حيث المساحة والتجهيزات.</li>
                        <li><b class="font-semibold text-black">✨ برنامج فعال:</b> نقدم برنامج ممتع ومفيد للجمهور.</li>
                        <li><b class="font-semibold text-black">🎤 متحدثين وخبراء:</b> نختار متحدثين شاطرين يقدموا محتوى قيّم.</li>
                        <li><b class="font-semibold text-black">🚀 التسويق والدعاية:</b> عشان نجذب أكبر عدد من المشاركين.</li>
                        <li><b class="font-semibold text-black">📱 التواصل مع المشاركين:</b> بنتواصل مع الجمهور قبل وبعد الإيفينت.</li>
                    </ul></div>` 
    },
    { 
        title: '👁️ رؤيتنا', 
        content: `<div dir="rtl"><p class="text-base leading-relaxed">بنسعى ننظم فعاليات استثنائية تسيب بصمة إيجابية، وتساعد في تطوير مهارات الشباب وتخلقلهم فرص جديدة، مع الالتزام بأعلى معايير الاحترافية والإبداع في كل خطوة.</p></div>` 
    }
];

export default function OrganizationTypesSection() {
    return (
        <section id="organization-types" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-black">أنواع التنظيم ومساراته</h2>
            <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 text-muted-foreground">
                شغل لجنة التنظيم بيتقسم لمسارين أساسيين، كل واحد فيهم ليه طبيعته ومتطلباته. استكشف تفاصيل كل نوع وشوف الفرق بتاعته بتشتغل إزاي.
            </p>

            <Tabs defaultValue="offline" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-auto p-1.5">
                    <TabsTrigger value="offline" className="text-base md:text-lg py-2 data-[state=active]:shadow-md">🎪 التنظيم على الأرض</TabsTrigger>
                    <TabsTrigger value="online" className="text-base md:text-lg py-2 data-[state=active]:shadow-md">💻 التنظيم الديجيتال</TabsTrigger>
                </TabsList>
                <TabsContent value="offline" className="mt-6">
                    <div className="card-custom rounded-xl p-4 md:p-6">
                         <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-black">أقسام التنظيم على الأرض</h3>
                         <CustomAccordion items={offlineAccordionItems} />
                    </div>
                </TabsContent>
                <TabsContent value="online" className="mt-6">
                     <div className="card-custom rounded-xl p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-black">أقسام التنظيم الديجيتال</h3>
                        <CustomAccordion items={onlineAccordionItems} />
                    </div>
                </TabsContent>
            </Tabs>

            <div className="mt-12">
                <CustomAccordion items={eventGoalsItems} type="multiple" />
            </div>
        </section>
    );
}
