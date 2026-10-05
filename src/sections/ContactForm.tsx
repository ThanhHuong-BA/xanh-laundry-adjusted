import { useState, type FormEvent } from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL, contactBackground, formOptions } from '../data/content';
import { submitLead, type Lead } from '../submitLead';
import { CONTACT_FORM_ID, cn } from '../lib';

type Errors = Partial<Record<keyof Lead, string>>;

const emptyForm: Lead = { name: '', phone: '', email: '', area: '', budget: '', hasSpace: '' };
const REQUIRED = 'Vui lòng điền thông tin này';

function validate(f: Lead): Errors {
  const errs: Errors = {};
  if (!f.name.trim()) errs.name = REQUIRED;
  if (!f.phone.trim()) errs.phone = REQUIRED;
  else if (!/^(0[1-9][0-9]{8}|84[1-9][0-9]{8})$/.test(f.phone.replace(/\s/g, ''))) errs.phone = 'Số điện thoại không hợp lệ (VD: 0901234567)';
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errs.email = 'Email không hợp lệ';
  return errs;
}

const inputCls = (err?: string) =>
  cn(
    'w-full border rounded-lg px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-primary/30 outline-none',
    err ? 'border-destructive' : 'border-input',
  );
const selectCls =
  'w-full border border-input rounded-lg px-4 py-2.5 pr-8 text-sm bg-background focus:ring-2 focus:ring-primary/30 outline-none appearance-none bg-no-repeat bg-[length:16px] bg-[position:right_0.5rem_center]';
const chevron =
  "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E\")";

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-1">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<Lead>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const setField = (k: keyof Lead, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: '' }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    try {
      await submitLead(form);
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const select = (k: 'area' | 'budget' | 'hasSpace', label: string, placeholder: string) => (
    <Field id={`lead-${k}`} label={label}>
      <select
        id={`lead-${k}`}
        value={form[k]}
        onChange={(e) => setField(k, e.target.value)}
        className={selectCls}
        style={{ backgroundImage: chevron }}
      >
        <option value="">{placeholder}</option>
        {formOptions[k].map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Field>
  );

  return (
    <section id={CONTACT_FORM_ID} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={contactBackground} alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Đăng ký nhận <span className="gradient-text">tư vấn miễn phí</span>
            </h2>
            <p className="text-white/80 mb-8">Đội ngũ XANH LAUNDRY sẽ liên hệ bạn trong vòng 24 giờ</p>
            <div className="space-y-4">
              <a href={PHONE_TEL} className="flex items-center gap-3 hover:opacity-90">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-white">Hotline</p>
                  <p className="text-sm text-white/80">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-90">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-white">Zalo</p>
                  <p className="text-sm text-white/80">Chat qua Zalo</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            {status === 'done' ? (
              <div className="xanh-card p-8 text-center bg-white/95 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Cảm ơn bạn đã đăng ký tư vấn!</h3>
                <p className="text-xanh-body">Chúng tôi sẽ liên hệ bạn trong 24 giờ.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="xanh-card p-6 md:p-8 space-y-4 bg-white/95 backdrop-blur-sm">
                <Field id="lead-name" label="Họ và tên *" error={errors.name}>
                  <input
                    id="lead-name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'lead-name-error' : undefined}
                    className={inputCls(errors.name)}
                    placeholder="Nguyễn Văn A"
                  />
                </Field>
                <Field id="lead-phone" label="Số điện thoại *" error={errors.phone}>
                  <input
                    id="lead-phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
                    className={inputCls(errors.phone)}
                    placeholder="0901 234 567"
                  />
                </Field>
                <Field id="lead-email" label="Email" error={errors.email}>
                  <input
                    id="lead-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'lead-email-error' : undefined}
                    className={inputCls(errors.email)}
                    placeholder="email@example.com"
                  />
                </Field>
                {select('area', 'Khu vực quan tâm', 'Chọn khu vực')}
                {select('budget', 'Vốn đầu tư dự kiến', 'Chọn mức vốn')}
                {select('hasSpace', 'Bạn đã có mặt bằng chưa?', 'Chọn')}
                {status === 'error' && (
                  <p className="text-sm text-destructive">Gửi không thành công. Vui lòng thử lại hoặc gọi hotline {PHONE_DISPLAY}.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-cta py-3.5 rounded-lg text-base transition-transform hover:scale-[1.02] shadow-lg disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === 'sending' ? 'ĐANG GỬI…' : 'GỬI ĐĂNG KÝ — NHẬN TƯ VẤN TRONG 24H'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
