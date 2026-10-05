import type { LucideIcon } from 'lucide-react';
import {
  Maximize2,
  User,
  Clock,
  ClipboardList,
  Users,
  Gift,
  BarChart3,
  Sparkles,
} from 'lucide-react';

const img = (name: string) => `/images/${name}`;

export const PHONE_DISPLAY = '0868 430 549';
export const PHONE_TEL = 'tel:0868430549';
export const ZALO_URL = 'https://zalo.me/0868430549';
export const MESSENGER_URL = 'https://m.me/462300140571623';
export const FACEBOOK_URL = 'https://www.facebook.com/xanhlaundry.franchise';
export const EMAIL = 'franchise@xanhlaundry.com';
export const LOGO = img('xanh-laundry-logo.png');

// Order matches the page: Process sits before TinyClean.
export const navItems = [
  { label: 'Vì sao chọn chúng tôi', href: '#why-us' },
  { label: 'Chi phí', href: '#investment' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Công nghệ', href: '#tinyclean' },
];

export const heroSlides = [
  img('hero-1.webp'),
  img('hero-2.jpg'),
  img('hero-3.webp'),
  img('hero-4.webp'),
  img('hero-5.webp'),
];

export const heroBullets = ['Dịch vụ chuẩn mực', 'Marketing bài bản', 'Đồng hành trọn đời'];

export const metrics = [
  { value: '10 NĂM', label: 'Kinh nghiệm' },
  { value: '162K+', label: 'Khách hàng' },
  { value: '20+', label: 'Cửa hàng có lợi nhuận' },
  { value: '#1', label: 'TinyClean - Công nghệ vượt trội' },
];

export const whyCards: { img: string; title: string; desc: string }[] = [
  {
    img: img('why-1.webp'),
    title: 'Vốn đầu tư tốt nhất thị trường',
    desc: 'Chỉ từ 150 triệu trọn gói, tốt nhất thị trường - bao gồm phí nhượng quyền vĩnh viễn, thiết bị, cải tạo. Thu hồi vốn sau 12-18 tháng.',
  },
  {
    img: img('why-2.webp'),
    title: 'Công nghệ quản lý trọn gói',
    desc: 'Nền tảng quản lý chuyên biệt cho cửa hàng giặt ủi duy nhất trên thị trường, xây dựng từ kinh nghiệm 9 năm vận hành hàng chục cửa hàng có lợi nhuận.',
  },
  {
    img: img('why-3.webp'),
    title: 'Đào tạo bài bản A-Z',
    desc: 'Đào tạo chuẩn chỉnh tất cả kiến thức, kinh nghiệm liên quan để có thể khởi sự, tiếp thị, vận hành, quản lý và thu lợi nhuận với cửa hàng giặt ủi.',
  },
  {
    img: img('why-4.webp'),
    title: 'Cam kết trọn đời',
    desc: 'Phí nhượng quyền vĩnh viễn. Đồng hành hỗ trợ nhanh chóng trọn đời - không setup bán máy và sau đó "mất hút" như nhiều thương hiệu khác.',
  },
];

/** A paragraph is a list of plain strings and bold runs (`{ b: '...' }`). */
export type RichText = (string | { b: string })[];

export const founderLetter: { lead?: boolean; content: RichText }[] = [
  { lead: true, content: ['Cảm ơn Quý đối tác đã dành thời gian tìm hiểu mô hình nhượng quyền giặt sấy thông minh của Xanh Laundry.'] },
  {
    content: [
      'Chúng tôi khởi đầu với một khát vọng nghiêm túc: xây dựng hệ thống nhượng quyền giặt sấy lớn nhất Việt Nam - hiện đại, chuyên nghiệp, chất lượng và tận tâm trong từng cửa hàng.',
    ],
  },
  {
    content: [
      'Khác với cách làm phổ biến trên thị trường - lắp đặt máy móc, đào tạo cơ bản rồi rút đi - điều Xanh Laundry mang đến cho anh/chị là ',
      { b: '10 năm kinh nghiệm lăn lộn thực chiến' },
      ' trong ngành giặt ủi và giặt hấp. Đó là những bài học đánh đổi bằng rất nhiều tiền bạc và thời gian, được chắt lọc qua hành trình phục vụ ',
      { b: 'hơn 162.000 khách hàng' },
      '.',
    ],
  },
  {
    content: [
      'Toàn bộ kinh nghiệm ấy, chúng tôi đặt trọn vào tay anh/chị: từ tư vấn khởi sự kinh doanh, phương án vốn, thi công lắp đặt, đào tạo trọn gói đến chăm sóc khách hàng. Và quan trọng hơn tất cả: ',
      { b: 'Xanh Laundry đồng hành lâu dài, cho đến khi tiệm giặt của anh/chị thực sự kinh doanh thành công.' },
    ],
  },
  { content: ['Rất mong được bắt đầu hành trình ấy cùng anh/chị.'] },
];
export const founderLetterImage = img('opening-298-thanh-cong.jpg');

export const comparisonCriteria = [
  'Vốn đầu tư',
  'Phí nhượng quyền & Phí ẩn',
  'Chương trình Đào tạo',
  'Hỗ trợ & Đồng hành',
  'Hỗ trợ Marketing',
  'Dịch vụ kinh doanh',
  'Phần mềm quản lý',
];

export const comparisonModels: { name: string; highlight?: boolean; values: string[] }[] = [
  {
    name: 'Nhượng quyền\nXanh Laundry',
    highlight: true,
    values: [
      'Từ 150 triệu',
      'Phí niêm yết 50 triệu giảm còn 30 triệu, không phí ẩn',
      '8 module bài bản kéo dài 1 tuần',
      'Hỗ trợ mọi thắc mắc Online/Offline trọn đời',
      'Kế hoạch 12 tháng, thiết lập kênh thương hiệu, hướng dẫn marketing hàng tuần',
      'Cung cấp từ giặt sấy, chăn ga đến giày, gấu bông. Nhiều nguồn thu',
      'App TinyClean thiết kế riêng cho tiệm giặt',
    ],
  },
  {
    name: 'Nhượng quyền\nGiặt sấy khác',
    values: [
      'Từ 250 triệu',
      'Phí ẩn lớn (~100 triệu tính vào giá máy)',
      '1–2 buổi hoặc chỉ giao quy trình trên giấy',
      'Có chính sách hỗ trợ nhưng khó liên hệ',
      'Sơ sài, không có định hướng bài bản',
      'Tùy thương hiệu nhưng phần lớn chỉ giặt sấy',
      'Phần mềm bán hàng POS chung chung',
    ],
  },
  {
    name: 'Giặt sấy\nTự động',
    values: [
      'Từ 300 triệu',
      'Phí nhượng quyền cao',
      'Rất ít hoặc không có',
      'Tự vận hành là chính',
      'Tự làm marketing',
      'Chủ yếu giặt sấy tự phục vụ',
      'Hệ thống thu tiền gắn với máy đắt đỏ',
    ],
  },
  {
    name: 'Đơn vị lắp đặt\nmáy',
    values: [
      'Từ 130 triệu, chỉ có máy móc',
      'Không thu phí nhượng quyền',
      'Chỉ hướng dẫn thao tác máy khi bàn giao',
      'Chỉ hỗ trợ về máy móc trong một khoảng thời gian ngắn sau khi bàn giao máy',
      'Không hỗ trợ marketing',
      'Tự xây dựng',
      'Tự tìm phần mềm',
    ],
  },
];

export const investmentItems: { name: string; cost: string; oldCost?: string; promo?: boolean }[] = [
  { name: 'Phí nhượng quyền (vĩnh viễn - trả 1 lần duy nhất)', cost: '30.000.000đ', oldCost: '50.000.000đ', promo: true },
  { name: 'Cải tạo mặt bằng, bàn ghế quầy kệ & bảng hiệu', cost: '50 – 70.000.000đ' },
  { name: 'Thiết bị (máy giặt, sấy, ủi, vệ sinh giày - tuỳ gói)', cost: 'từ 70.000.000đ' },
  { name: 'Máy in bill (tuỳ chọn)', cost: '1.500.000đ' },
];

export const services = [
  { name: 'Giặt sấy theo kg', img: img('service-laundry-kg.png') },
  { name: 'Ủi treo', img: img('service-ironing.png') },
  { name: 'Giặt đồ gia đình (chăn, ga, gối, drap)', img: img('service-household.png') },
  { name: 'Giặt đồ vải (khăn spa, khách sạn, ngân hàng...)', img: img('service-fabric.png') },
  { name: 'Giặt gấu bông', img: img('service-teddy.jpg') },
  { name: 'Vệ sinh giày', img: img('service-shoes.png') },
];

export const storePhotos = [
  { src: img('store-front.jpg'), label: 'Mặt tiền cửa hàng', pos: 'object-top' },
  { src: img('store-inside.webp'), label: 'Bên trong cửa hàng', pos: 'object-center' },
];

export const storeSpecs: { icon: LucideIcon; big: string; unit: string; label: string }[] = [
  { icon: Maximize2, big: '25 – 40', unit: 'm²', label: 'Diện tích mặt bằng' },
  { icon: User, big: '1', unit: 'nhân viên / ca', label: 'Vận hành gọn nhẹ' },
  { icon: Clock, big: '12 – 14', unit: 'giờ / ngày', label: 'Thời gian hoạt động' },
];

export const packages: { tier: string; price: string; tag?: string; items: string[]; fit: string }[] = [
  {
    tier: 'Khởi Nghiệp',
    price: '70',
    items: ['3 cặp máy giặt sấy 9kg', '1 máy sấy giày cỡ vừa', '1 cây ủi', '1 bồn rửa đôi vệ sinh giày'],
    fit: 'Mặt bằng gọn, chi phí thấp, kiếm tiền ngay',
  },
  {
    tier: 'Tăng Tốc',
    price: '100',
    tag: 'PHỔ BIẾN NHẤT',
    items: [
      '2 cặp máy giặt sấy 9kg',
      '1 cặp máy giặt sấy bán công nghiệp 12–13kg',
      '1 máy sấy giày cỡ vừa',
      '1 cây ủi',
      '1 bồn rửa đôi vệ sinh giày',
    ],
    fit: 'Mặt bằng gọn, tăng tốc nhanh, dịch vụ đa dạng',
  },
  {
    tier: 'Chuyên Nghiệp',
    price: '145',
    items: [
      '3 cặp máy giặt sấy 9kg',
      '1 cặp máy giặt sấy bán công nghiệp 12–13kg',
      '1 máy vệ sinh giày công nghiệp cỡ lớn',
      '1 máy sấy giày cỡ lớn',
      '1 cây ủi',
    ],
    fit: 'Kinh doanh chuyên nghiệp, dịch vụ đa dạng, khách hàng đông',
  },
];

export const packageStyles = [
  { grad: 'linear-gradient(135deg, #3F3F46, #52525B)', chipBg: 'rgba(44,44,44,0.10)', chipText: '#2C2C2C' },
  { grad: 'linear-gradient(135deg, #00D4FF, #00C8CA, #00C896)', chipBg: 'rgba(0,200,202,0.14)', chipText: '#0891B2' },
  { grad: 'linear-gradient(135deg, #1A237E, #283593)', chipBg: 'rgba(26,35,126,0.12)', chipText: '#1A237E' },
];

export const galleryImages = [
  img('why-3.webp'),
  img('gallery-2.webp'),
  img('gallery-3.webp'),
  img('gallery-4.png'),
  img('gallery-5.jpg'),
  img('gallery-6.webp'),
  img('gallery-7.webp'),
];

export const processSteps = [
  { num: '01', title: 'Đăng ký tư vấn', desc: 'Nhắn tin, gọi hotline hoặc điền form - đội ngũ Xanh Laundry liên hệ trong 24H' },
  { num: '02', title: 'Tư vấn 1-1 online', desc: 'Đội ngũ chuyên gia gọi online, khảo sát nhu cầu chi tiết, tư vấn tận tâm mọi vấn đề' },
  {
    num: '03',
    title: 'Ký LOI (Letter of Intent) và đặt cọc',
    desc: 'Gặp mặt (hoặc online), tư vấn chi tiết giải pháp, máy móc, dự phóng chi phí, lợi nhuận kỳ vọng. Ký LOI và đặt cọc.',
  },
  {
    num: '04',
    title: 'Tư vấn, tìm kiếm và khảo sát mặt bằng',
    desc: 'Đội ngũ chuyên gia hỗ trợ tìm kiếm, tư vấn khảo sát, chốt hợp đồng mặt bằng. Lên thiết kế 2D, 3D phối cảnh.',
  },
  {
    num: '05',
    title: 'Ký hợp đồng chính thức & thanh toán',
    desc: 'Ký kết HĐ chính thức, chốt phương án thi công & chi phí, thanh toán phí nhượng quyền và đặt cọc máy móc, thi công.',
  },
  { num: '06', title: 'Thi công & lắp đặt', desc: 'Thi công sửa chữa, lắp đặt bảng hiệu, máy móc, điện nước, trang bị quầy kệ bàn tủ…etc' },
  { num: '07', title: 'Đào tạo & chạy thử', desc: 'Đào tạo trọn gói vận hành, xử lý đồ, marketing, quản lý tiệm, phần mềm, chăm sóc khách hàng' },
  { num: '08', title: 'Khai trương & kinh doanh', desc: 'Hỗ trợ khai trương, đội ngũ Xanh Laundry đồng hành liên tục trong chặng đường kinh doanh' },
];

/**
 * Store-opening videos. Leave `src` empty to show the "Video sắp cập nhật" placeholder.
 * Accepts an .mp4 URL (e.g. '/videos/khai-truong-1.mp4') or a YouTube embed URL
 * (e.g. 'https://www.youtube.com/embed/VIDEO_ID').
 */
export const openingVideos = [
  { title: 'Khai trương cửa hàng Xanh Laundry 1', src: '' },
  { title: 'Khai trương cửa hàng Xanh Laundry 2', src: '' },
];

export const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  images: string[];
  color: string;
}[] = [
  {
    icon: ClipboardList,
    title: 'Quản lý đơn hàng tập trung & rõ ràng',
    description:
      'Lên đơn nhanh, chụp hình đồ trước khi xử lý, ghi chú yêu cầu xử lý của khách và theo dõi từng đơn, từng món theo từng công đoạn giặt',
    images: ['feature-order-items.png', 'feature-order-photo.png', 'feature-order-list.png'].map(img),
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Lưu trữ & chăm sóc khách hàng hiệu quả hơn',
    description:
      'Lưu trữ thông tin (liên hệ, sở thích, lịch sử đặt hàng,... etc) để phục vụ và chăm sóc khách hàng nhanh & tốt hơn, tăng khả năng hài lòng và quay lại',
    images: ['feature-customer-info.png'].map(img),
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gift,
    title: 'Khuyến mãi – hoàn tiền giữ chân khách',
    description:
      'Giữ chân và khuyến khích khách hàng sử dụng thường xuyên với các chương trình khuyến mãi, hoàn tiền hấp dẫn, dễ dàng khởi tạo',
    images: ['feature-promo-list.png', 'feature-cashback.png', 'feature-promo-apply.png'].map(img),
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: BarChart3,
    title: 'Báo cáo doanh thu – chi phí minh bạch, tự động',
    description:
      'Theo dõi doanh thu và chi phí tự động theo ngày, tuần, tháng một cách chính xác. Nắm bắt kịp thời tình hình kinh doanh của cửa hàng',
    images: [
      'feature-report-overview.png',
      'feature-report-revenue.png',
      'feature-report-services.png',
      'feature-report-customers.png',
    ].map(img),
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Sparkles,
    title: 'Tiện ích nâng cao, quản lý tiệm chuyên nghiệp hơn',
    description:
      'Khách hàng có thể theo dõi đơn hàng trực tuyến (website), được thông báo vấn đề trước khi xử lý, nhận thông tin tự động khi đồ hoàn tất (Zalo, SMS), xác nhận giao đúng người bằng mã OTP,... etc',
    images: ['feature-store-tracking.png', 'feature-store-notification.png', 'feature-store-otp.png'].map(img),
    color: 'from-violet-500 to-purple-500',
  },
];

export const founders = [
  {
    name: 'Lê Phước Phúc',
    role: 'Co-Founder & CEO Xanh Laundry',
    img: img('founder-phuc.jpg'),
    bio: 'Kỹ sư công nghệ Đại học Bách Khoa, cựu Giám đốc sản phẩm Chợ Tốt, cựu Giám đốc chuyển đổi số Home Credit Vietnam. Đồng sáng lập HERAMO — thương hiệu số 1 ngành giặt ủi cao cấp tại HCM.',
  },
  {
    name: 'Huỳnh Nhật Phương',
    role: 'Co-Founder & COO Xanh Laundry',
    img: img('founder-phuong.jpg'),
    bio: 'MBA — Đại học Kinh tế HCM & Viện ISB. Cựu quản lý nhà hàng 5 sao thuộc Park Hyatt Saigon. Đồng sáng lập HERAMO — thương hiệu số 1 ngành giặt ủi cao cấp tại HCM.',
  },
];
export const foundersIntro =
  'Đội ngũ sáng lập với 10 năm kinh nghiệm xây dựng, kinh doanh, vận hành và mở rộng trong ngành giặt ủi cao cấp với đa dịch vụ (giặt ủi hằng ngày, giặt hấp đồ hiệu, vệ sinh spa phục hồi giày, túi xách, vệ sinh sofa nệm rèm thảm & máy lạnh), phục vụ 162.000+ khách hàng, vận hành 10+ cửa hàng có lợi nhuận tại TP.HCM.';
export const teamPhotos = [img('opening-298-thanh-cong.jpg'), img('team-2.webp')];

export const guarantees = [
  { title: 'KHÔNG phí nhượng quyền theo năm', desc: 'Trả 30 triệu một lần - sử dụng thương hiệu nhượng quyền vĩnh viễn. Không thu phí theo năm.' },
  { title: 'KHÔNG "đem con bỏ chợ"', desc: 'Đồng hành hỗ trợ nhanh chóng trọn đời cho mọi khía cạnh vận hành, kinh doanh và quản lý.' },
  {
    title: 'KHÔNG mở dày đặc',
    desc: 'Cam kết khoảng cách tối thiểu, không mở cửa hàng dày đặc gây cạnh tranh nội bộ và giảm hiệu quả kinh doanh.',
  },
];

export const personas = [
  {
    img: img('persona-office.jpg'),
    title: 'Nhân viên văn phòng',
    desc: 'Có từ 200 triệu tiền nhàn rỗi, muốn nguồn thu nhập thêm bền vững. Không cần nghỉ việc - quản lý từ xa qua TinyClean.',
  },
  {
    img: img('persona-property.jpg'),
    title: 'Chủ mặt bằng',
    desc: 'Có mặt bằng tầng trệt 15–25m² đang trống hoặc cho thuê giá thấp. Mở XANH LAUNDRY để tận dụng diện tích, tăng dòng tiền thu.',
  },
  {
    img: img('persona-startup.jpg'),
    title: 'Người mới khởi nghiệp',
    desc: 'Lần đầu kinh doanh, cần mô hình có quy trình sẵn, đào tạo bài bản, rủi ro thấp, thị trường sẵn có.',
  },
  {
    img: img('persona-investor.jpg'),
    title: 'Nhà đầu tư có kinh nghiệm',
    desc: 'Muốn mở rộng danh mục đầu tư với mô hình vận hành tinh gọn, không cần quản lý trực tiếp, phục vụ thị trường dịch vụ cơ bản có nhu cầu bền vững.',
  },
];

export const contactBackground = img('contact-bg.webp');
export const formOptions = {
  area: ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Khác'],
  budget: ['100–150 triệu', '150–200 triệu', '200–300 triệu', 'Trên 300 triệu'],
  hasSpace: ['Đã có', 'Chưa có', 'Đang tìm'],
};
