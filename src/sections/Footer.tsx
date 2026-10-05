import { Mail, MessageCircle, Phone } from 'lucide-react';
import { EMAIL, FACEBOOK_URL, LOGO, PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from '../data/content';
import { FacebookIcon } from '../components/FacebookIcon';

const link = 'flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors';
const colTitle = 'font-display font-bold text-[11px] uppercase tracking-widest text-primary-foreground/50 mb-3';

export function Footer() {
  return (
    <footer className="bg-xanh-navy pt-10 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-12 pb-6">
          <div>
            <img src={LOGO} alt="XANH LAUNDRY" className="h-10 mb-3 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Hệ thống nhượng quyền giặt sấy thông minh - vốn thấp, vận hành hiệu quả, đồng hành trọn đời.
            </p>
          </div>
          <div>
            <div className={colTitle}>Doanh nghiệp</div>
            <div className="font-display font-bold text-[13px] text-primary-foreground/90 leading-snug mb-2">Công ty TNHH CN DV &amp; TM Xanh Laundry</div>
            <div className="text-[12.5px] text-primary-foreground/65 leading-relaxed">
              <div>MST: 0319634321</div>
              <div>
                Số 01 Trường Sơn, P. Tân Sơn Nhất,
                <br />
                TP Hồ Chí Minh
              </div>
            </div>
          </div>
          <div>
            <div className={colTitle}>Liên hệ</div>
            <div className="flex flex-col gap-2 text-[13.5px]">
              <a href={PHONE_TEL} className={link}>
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className={link}>
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={link}>
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className={link}>
                <MessageCircle className="h-4 w-4" />
                Zalo
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-4 text-center text-xs text-primary-foreground/45">
          © {new Date().getFullYear()} XANH LAUNDRY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
