import { Button } from '@/components/ui/button';
import { Bot, Link as LinkIcon, Lock } from 'lucide-react';

export default function DigitalServicesSection() {
    return (
        <section id="services" className="scroll-mt-24">
             <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">الخدمات الرقمية</h2>
             <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8">
                إيمانًا بأهمية التكنولوجيا، طورت لجنة التنظيم مجموعة من الحلول الرقمية الذكية لتبسيط الإجراءات وتعزيز تجربة المشاركين، مما يعكس رؤيتنا في دمج الinnovation مع العمل التنظيمي الاحترافي.
            </p>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-custom p-6 rounded-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">📨 خدمة ارسال دعوات تحيا مصر</h3>
                        <p className="text-sm md:text-base mb-4">نظام ذكي يرسل دعوات مخصصة باسم كل مستخدم على بريده الإلكتروني مباشرة.</p>
                    </div>
                    <Button variant="outline" disabled className="w-full mt-4">
                        <Lock className="ml-2 h-4 w-4" />
                        نظام داخلي
                    </Button>
                </div>
                <div className="card-custom p-6 rounded-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">📱 نظام تسجيل حضور تحيا مصر</h3>
                        <p className="text-sm md:text-base mb-4">آلية رقمية تعتمد على QR لتسجيل حضور المشاركين بسرعة ودقة عند الوصول.</p>
                    </div>
                    <Button variant="outline" disabled className="w-full mt-4">
                         <Lock className="ml-2 h-4 w-4" />
                        نظام داخلي
                    </Button>
                </div>
                <div className="card-custom p-6 rounded-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">🤖 نموذج ذكاء اصطناعى (Al)</h3>
                        <p className="text-sm md:text-base mb-4">وكيل ذكي يرد على الاستفسارات، ينظم البيانات، ويتعامل باللهجة المصرية.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <Button asChild variant="outline" className="flex-1">
                            <a href="https://ai.tahyamisrsu.com/" target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="ml-2 h-4 w-4" />
                                الموقع الرسمي
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                             <a href="https://t.me/tahyamisrbot" target="_blank" rel="noopener noreferrer">
                                <Bot className="ml-2 h-4 w-4" />
                                بوت تيليجرام
                            </a>
                        </Button>
                    </div>
                </div>
                 <div className="card-custom p-6 rounded-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">📜 انظمة اصدار شهادات رقمية</h3>
                        <p className="text-sm md:text-base mb-4">أدوات آلية تنشئ وتُرسل الشهادات بصيغة PDF وPNG بمجرد انتهاء الفعاليات.</p>
                    </div>
                    <Button asChild variant="outline" className="w-full mt-4">
                        <a href="https://t.me/certificate_tahyamisr1bot" target="_blank" rel="noopener noreferrer">
                             <Bot className="ml-2 h-4 w-4" />
                             بوت الشهادات
                        </a>
                    </Button>
                </div>
                 <div className="card-custom p-6 rounded-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">🤖 بوت دعوات تحيا مصر</h3>
                        <p className="text-sm md:text-base mb-4">وكيل ذكاء اصطناعي على تليجرام يسهل إرسال الدعوات للمشاركين بسرعة.</p>
                    </div>
                     <Button asChild variant="outline" className="w-full mt-4">
                        <a href="https://t.me/invite_tahyamisrbot" target="_blank" rel="noopener noreferrer">
                            <Bot className="ml-2 h-4 w-4" />
                            بوت الدعوات
                        </a>
                    </Button>
                </div>
                 <div className="card-custom p-6 rounded-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">🎂 نظام تهنئة بأعياد الميلاد</h3>
                        <p className="text-sm md:text-base mb-4">نظام ذكي يُرسل تهنئات تلقائية بعيد الميلاد للمستخدمين بأسلوب شخصي وإنساني عبر البريد الإلكتروني ورقم الهاتف.</p>
                    </div>
                     <Button variant="outline" disabled className="w-full mt-4">
                         <Lock className="ml-2 h-4 w-4" />
                        نظام داخلي
                    </Button>
                </div>
             </div>
        </section>
    );
}
