import React, { useState, useEffect } from 'react';
import { Check, X, Plane, FileText, UserCheck, RefreshCw, Minus, Users, FileCheck, Stethoscope, GraduationCap, PlaneTakeoff, Shield, Heart, SearchCheck, ChevronDown, Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

// Language Types
type Language = 'en' | 'zh' | 'ms' | 'ta';

// Translations
const translations = {
  en: {
    title: "Services Tailored to Your Needs",
    subtitle: "Our expertise lies in Indonesian domestic helpers. Every family's situation is unique—we handle it all with care and clarity, welcoming helpers of all nationalities.",
    buttons: {
      enquire: "Enquire Now",
      consultation: "Get Free Consultation"
    },
    services: {
      fresh: {
        title: "Fresh Maid",
        desc: "Perfect for families needing a new helper for the first time. Start fresh with a helper trained specifically for your needs.",
        price: "Affordable Rate"
      },
      ex: {
        title: "Ex-Singapore",
        desc: "For helpers with previous Singapore experience returning to work. They understand the lifestyle and need less training.",
        price: "Affordable Rate"
      },
      transfer: {
        title: "Transfer Maid",
        desc: "Find a new helper who is already in Singapore. No waiting for flights, faster deployment.",
        price: "Affordable Rate"
      },
      direct: {
        title: "Direct Hire",
        desc: "You found her, we handle the rest. We manage the bureaucracy while you focus on the relationship.",
        price: "Affordable Rate"
      },
      renewal: {
        title: "Work Permit Renewal",
        desc: "Guidance for families renewing an existing helper's permit. Expert help at no extra cost.",
        price: "Complimentary Guidance"
      }
    },
    included: {
      title: "Included Services",
      tag: "Flexible progressive payment available",
      items: {
        recruitment: {
          title: "Recruitment & Matching",
          list: ["Overseas recruitment", "Matching with suitable helper"]
        },
        documentation: {
          title: "Documentation & Legal Processing",
          list: ["Paperwork and documentation handling", "Work permit application (processing & transfer)", "Embassy liaison", "Employment contract preparation or updates"]
        },
        medical: {
          title: "Medical Requirements",
          list: ["Pre-departure medical examination", "Arrival medical check-up"]
        },
        training: {
          title: "Training",
          list: ["Pre-departure training", "Refresher training"]
        },
        travel: {
          title: "Travel & Accommodations",
          list: ["Airfare", "Initial lodging on arrival"]
        },
        insurance: {
          title: "Insurance",
          list: ["Insurance arrangement/setup"]
        },
        settling: {
          title: "Settling & Aftercare",
          list: ["Settling-In Programme (SIP)", "Post-placement support (ongoing guidance)"]
        },
        verification: {
          title: "Background Verification",
          list: ["Verification of past experience"]
        }
      }
    },
    comparison: {
      title: "Service Comparison",
      desc: "A clear look at what is included in each package.",
      headers: ["Feature", "Fresh Maid", "Ex-Singapore", "Transfer", "Direct Hire", "Renewal"],
      rows: ["All-in-One Pricing", "Recruitment", "Airfare & Lodging", "Work Permit", "Medical Check", "Insurance", "SIP Training", "Post-Placement Support"],
      values: {
        guidance: "Guidance",
        na: "N/A"
      },
      footer: "* We also offer flexible progressive payment options to make the hiring process easier and more convenient for our clients.",
      cta_title: "Still unsure which service is right for you?",
      cta_desc_1: "That's completely normal. Contact us for a ",
      cta_desc_bold: "free consultation",
      cta_desc_2: " and we'll ask a few simple questions to recommend the perfect fit."
    },
    nav: {
      fresh: 'Fresh Maid',
      ex: 'Ex-Singapore',
      transfer: 'Transfer Maid',
      direct: 'Direct Hire',
      renewal: 'Renewal',
      included: 'Included Services',
      comparison: 'Comparison'
    }
  },
  zh: {
    title: "为您量身定制的服务",
    subtitle: "我们的专长在于印尼家庭帮佣。每个家庭的情况都是独特的——我们以关怀和清晰的态度处理一切，同时也欢迎所有国籍的帮佣。",
    buttons: {
      enquire: "立即咨询",
      consultation: "免费咨询"
    },
    services: {
      fresh: {
        title: "新女佣",
        desc: "非常适合首次需要帮佣的家庭。从一位专为您需求受训的帮佣开始。",
        price: "实惠价格"
      },
      ex: {
        title: "前新加坡女佣",
        desc: "针对有新加坡工作经验的帮佣。她们了解这里的生活方式，需要较少的培训。",
        price: "实惠价格"
      },
      transfer: {
        title: "转让女佣",
        desc: "寻找已经在新加坡的帮佣。无需等待航班，部署更快。",
        price: "实惠价格"
      },
      direct: {
        title: "直接聘用",
        desc: "您找到了她，剩下的交给我们。我们处理繁文缛节，您专注于建立关系。",
        price: "实惠价格"
      },
      renewal: {
        title: "工作准证更新",
        desc: "为更新现有帮佣准证的家庭提供指导。无需额外费用的专家帮助。",
        price: "免费指导"
      }
    },
    included: {
      title: "包含服务",
      tag: "提供灵活的累进付款方式",
      items: {
        recruitment: {
          title: "招聘与配对",
          list: ["海外招聘", "匹配合适的帮佣"]
        },
        documentation: {
          title: "文件与法律处理",
          list: ["文件处理", "工作准证申请（处理与转让）", "大使馆联络", "雇佣合同准备或更新"]
        },
        medical: {
          title: "医疗要求",
          list: ["出发前体检", "抵达后体检"]
        },
        training: {
          title: "培训",
          list: ["出发前培训", "复习培训"]
        },
        travel: {
          title: "旅行与住宿",
          list: ["机票", "抵达后的初步住宿"]
        },
        insurance: {
          title: "保险",
          list: ["保险安排/设置"]
        },
        settling: {
          title: "安顿与后续关怀",
          list: ["适应课程 (SIP)", "安置后支持（持续指导）"]
        },
        verification: {
          title: "背景核实",
          list: ["过去经验核实"]
        }
      }
    },
    comparison: {
      title: "服务比较",
      desc: "清楚了解每个配套包含的内容。",
      headers: ["功能", "新女佣", "前新加坡", "转让", "直接聘用", "更新"],
      rows: ["一站式定价", "招聘", "机票与住宿", "工作准证", "体检", "保险", "SIP 培训", "安置后支持"],
      values: {
        guidance: "指导",
        na: "不适用"
      },
      footer: "* 我们还提供灵活的累进付款选项，使招聘过程对我们的客户来说更容易和方便。",
      cta_title: "还不确定哪种服务适合您？",
      cta_desc_1: "这完全正常。联系我们要一个",
      cta_desc_bold: "免费咨询",
      cta_desc_2: "，我们会问几个简单的问题来推荐最适合您的方案。"
    },
    nav: {
      fresh: '新女佣',
      ex: '前新加坡',
      transfer: '转让女佣',
      direct: '直接聘用',
      renewal: '更新',
      included: '包含服务',
      comparison: '比较'
    }
  },
  ms: {
    title: "Perkhidmatan yang Disesuaikan untuk Anda",
    subtitle: "Kepakaran kami terletak pada pembantu rumah Indonesia. Setiap situasi keluarga adalah unik—kami mengendalikannya dengan teliti dan jelas, sambil mengalu-alukan pembantu dari semua kewarganegaraan.",
    buttons: {
      enquire: "Tanya Sekarang",
      consultation: "Dapatkan Konsultasi Percuma"
    },
    services: {
      fresh: {
        title: "Pembantu Baru",
        desc: "Sempurna untuk keluarga yang memerlukan pembantu baru buat kali pertama. Mulakan dengan pembantu yang dilatih khusus untuk keperluan anda.",
        price: "Kadar Berpatutan"
      },
      ex: {
        title: "Bekas Singapura",
        desc: "Untuk pembantu dengan pengalaman Singapura terdahulu yang kembali bekerja. Mereka memahami gaya hidup dan memerlukan kurang latihan.",
        price: "Kadar Berpatutan"
      },
      transfer: {
        title: "Pembantu Pindahan",
        desc: "Cari pembantu baru yang sudah berada di Singapura. Tiada menunggu penerbangan, penempatan lebih cepat.",
        price: "Kadar Berpatutan"
      },
      direct: {
        title: "Pengambilan Terus",
        desc: "Anda menemuinya, kami uruskan selebihnya. Kami menguruskan birokrasi sementara anda fokus pada hubungan kerja.",
        price: "Kadar Berpatutan"
      },
      renewal: {
        title: "Pembaharuan Permit Kerja",
        desc: "Panduan untuk keluarga yang memperbaharui permit pembantu sedia ada. Bantuan pakar tanpa kos tambahan.",
        price: "Panduan Percuma"
      }
    },
    included: {
      title: "Perkhidmatan Termasuk",
      tag: "Pembayaran progresif fleksibel disediakan",
      items: {
        recruitment: {
          title: "Pengambilan & Padanan",
          list: ["Pengambilan luar negara", "Padanan dengan pembantu yang sesuai"]
        },
        documentation: {
          title: "Dokumentasi & Pemprosesan Undang-undang",
          list: ["Pengendalian kertas kerja dan dokumentasi", "Permohonan permit kerja (pemprosesan & pemindahan)", "Perhubungan kedutaan", "Penyediaan atau kemas kini kontrak pekerjaan"]
        },
        medical: {
          title: "Keperluan Perubatan",
          list: ["Pemeriksaan perubatan pra-pelepasan", "Pemeriksaan perubatan ketibaan"]
        },
        training: {
          title: "Latihan",
          list: ["Latihan pra-pelepasan", "Latihan penyegaran"]
        },
        travel: {
          title: "Perjalanan & Penginapan",
          list: ["Tambang penerbangan", "Penginapan awal semasa ketibaan"]
        },
        insurance: {
          title: "Insurans",
          list: ["Pengaturan/persediaan insurans"]
        },
        settling: {
          title: "Penyelesaian & Penjagaan Selepas",
          list: ["Program Menyesuaikan Diri (SIP)", "Sokongan pasca-penempatan (panduan berterusan)"]
        },
        verification: {
          title: "Verifikasi Latar Belakang",
          list: ["Verifikasi pengalaman lalu"]
        }
      }
    },
    comparison: {
      title: "Perbandingan Perkhidmatan",
      desc: "Pandangan jelas mengenai apa yang termasuk dalam setiap pakej.",
      headers: ["Ciri", "Pembantu Baru", "Bekas Singapura", "Pindahan", "Terus", "Pembaharuan"],
      rows: ["Harga All-in-One", "Pengambilan", "Tiket & Penginapan", "Permit Kerja", "Pemeriksaan Perubatan", "Insurans", "Latihan SIP", "Sokongan Pasca-Penempatan"],
      values: {
        guidance: "Panduan",
        na: "T/B"
      },
      footer: "* Kami juga menawarkan pilihan pembayaran progresif yang fleksibel untuk menjadikan proses pengambilan lebih mudah dan selesa bagi pelanggan kami.",
      cta_title: "Masih tidak pasti perkhidmatan mana yang sesuai untuk anda?",
      cta_desc_1: "Itu perkara biasa. Hubungi kami untuk ",
      cta_desc_bold: "konsultasi percuma",
      cta_desc_2: " dan kami akan menanyakan beberapa soalan mudah untuk mengesyorkan pilihan yang tepat."
    },
    nav: {
      fresh: 'Pembantu Baru',
      ex: 'Bekas SG',
      transfer: 'Pindahan',
      direct: 'Terus',
      renewal: 'Pembaharuan',
      included: 'Perkhidmatan Termasuk',
      comparison: 'Perbandingan'
    }
  },
  ta: {
    title: "உங்கள் தேவைகளுக்கு ஏற்ற சேவைகள்",
    subtitle: "இந்தோனேசிய வீட்டுப் பணிப்பெண்களில் எங்கள் நிபுணத்துவம் உள்ளது. ஒவ்வொரு குடும்பத்தின் சூழ்நிலையும் தனித்துவமானது—நாங்கள் அனைத்தையும் கவனத்துடனும் தெளிவுடனும் கையாளுகிறோம், அனைத்து நாட்டுப் பணிப்பெண்களையும் வரவேற்கிறோம்.",
    buttons: {
      enquire: "வி விசாரிக்கவும்",
      consultation: "இலவச ஆலோசனை பெறுங்கள்"
    },
    services: {
      fresh: {
        title: "புதிய பணிப்பெண்",
        desc: "முதல் முறையாக புதிய உதவியாளர் தேவைப்படும் குடும்பங்களுக்கு ஏற்றது. உங்கள் தேவைகளுக்கு ஏற்ப பயிற்சி பெற்ற உதவியாளருடன் புதிதாகத் தொடங்குங்கள்.",
        price: "மலிவு விலை"
      },
      ex: {
        title: "முன்னாள் சிங்கப்பூர்",
        desc: "முன்னர் சிங்கப்பூர் அனுபவம் உள்ள உதவியாளர்கள் வேலைக்குத் திரும்புகின்றனர். அவர்கள் வாழ்க்கை முறையைப் புரிந்து கொண்டுள்ளனர் மற்றும் குறைவான பயிற்சி தேவை.",
        price: "மலிவு விலை"
      },
      transfer: {
        title: "இடமாற்ற பணிப்பெண்",
        desc: "ஏற்கனவே சிங்கப்பூரில் உள்ள புதிய உதவியாளரைக் கண்டறியவும். விமானங்களுக்காக காத்திருக்க வேண்டாம், விரைவான பணியமர்த்தல்.",
        price: "மலிவு விலை"
      },
      direct: {
        title: "நேரடி வேலைவாய்ப்பு",
        desc: "நீங்கள் அவளைக் கண்டுபிடித்தீர்கள், மீதமுள்ளவற்றை நாங்கள் கையாளுகிறோம். உறவில் நீங்கள் கவனம் செலுத்தும்போது நாங்கள் அதிகாரத்துவத்தை நிர்வகிக்கிறோம்.",
        price: "மலிவு விலை"
      },
      renewal: {
        title: "வேலை அனுமதி புதுப்பித்தல்",
        desc: "தற்போதைய உதவியாளரின் அனுமதியைப் புதுப்பிக்கும் குடும்பங்களுக்கான வழிகாட்டுதல். கூடுதல் செலவில்லாத நிபுணர் உதவி.",
        price: "இலவச வழிகாட்டுதல்"
      }
    },
    included: {
      title: "உள்ளடங்கிய சேவைகள்",
      tag: "நெகிழ்வான முற்போக்கு கட்டணம் கிடைக்கிறது",
      items: {
        recruitment: {
          title: "ஆட்சேர்ப்பு & பொருத்தம்",
          list: ["வெளிநாட்டு ஆட்சேர்ப்பு", "பொருத்தமான உதவியாளருடன் பொருத்துதல்"]
        },
        documentation: {
          title: "ஆவணங்கள் & சட்ட செயலாக்கம்",
          list: ["காகிதப்பணி மற்றும் ஆவணங்கள் கையாளுதல்", "வேலை அனுமதி விண்ணப்பம் (செயலாக்கம் & பரிமாற்றம்)", "தூதரக தொடர்பு", "வேலை ஒப்பந்தம் தயாரித்தல் அல்லது புதுப்பித்தல்"]
        },
        medical: {
          title: "மருத்துவத் தேவைகள்",
          list: ["புறப்படுவதற்கு முந்தைய மருத்துவ பரிசோதனை", "வருகை மருத்துவ பரிசோதனை"]
        },
        training: {
          title: "பயிற்சி",
          list: ["புறப்படுவதற்கு முந்தைய பயிற்சி", "புத்துணர்வு பயிற்சி"]
        },
        travel: {
          title: "பயணம் & தங்குமிடம்",
          list: ["விமானக் கட்டணம்", "வருகையில் ஆரம்ப தங்குமிடம்"]
        },
        insurance: {
          title: "காப்பீடு",
          list: ["காப்பீடு ஏற்பாடு/அமைப்பு"]
        },
        settling: {
          title: "குடியேறுதல் & பின்காப்பு",
          list: ["குடியேறுதல் திட்டம் (SIP)", "வேலைக்குப் பிந்தைய ஆதரவு (தொடர் வழிகாட்டுதல்)"]
        },
        verification: {
          title: "பின்னணி சரிபார்ப்பு",
          list: ["கடந்த கால அனுபவத்தின் சரிபார்ப்பு"]
        }
      }
    },
    comparison: {
      title: "சேவை ஒப்பீடு",
      desc: "ஒவ்வொரு தொகுப்பிலும் என்ன சேர்க்கப்பட்டுள்ளது என்பதற்கான தெளிவான பார்வை.",
      headers: ["அம்சம்", "புதிய", "முன்னாள் SG", "இடமாற்றம்", "நேரடி", "புதுப்பித்தல்"],
      rows: ["அனைத்தும் கொண்ட விலை", "ஆட்சேர்ப்பு", "விமானம் & தங்குமிடம்", "வேலை அனுமதி", "மருத்துவ பரிசோதனை", "காப்பீடு", "SIP பயிற்சி", "வேலைக்குப் பிந்தைய ஆதரவு"],
      values: {
        guidance: "வழிகாட்டுதல்",
        na: "பொருந்தாது"
      },
      footer: "* பணியமர்த்தல் செயல்முறையை எங்கள் வாடிக்கையாளர்களுக்கு எளிதாகவும் வசதியாகவும் மாற்ற நெகிழ்வான முற்போக்கு கட்டண விருப்பங்களையும் நாங்கள் வழங்குகிறோம்.",
      cta_title: "எந்த சேவை உங்களுக்கு சரியானது என்று இன்னும் உறுதியாக தெரியவில்லையா?",
      cta_desc_1: "அது முற்றிலும் இயல்பானது. எங்களைத் தொடர்பு கொள்ளுங்கள் ",
      cta_desc_bold: "இலவச ஆலோசனை",
      cta_desc_2: " மேலும் சரியான பொருத்தத்தைப் பரிந்துரைக்க நாங்கள் சில எளிய கேள்விகளைக் கேட்போம்."
    },
    nav: {
      fresh: 'புதிய பணிப்பெண்',
      ex: 'முன்னாள் SG',
      transfer: 'இடமாற்றம்',
      direct: 'நேரடி',
      renewal: 'புதுப்பித்தல்',
      included: 'உள்ளடங்கிய சேவைகள்',
      comparison: 'ஒப்பீடு'
    }
  }
};

interface ServiceCardProps {
  id: string;
  title: string;
  icon: any;
  desc: string;
  price: string;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, icon: Icon, desc, price, buttonText }) => (
  <div id={id} className="scroll-mt-32 bg-white rounded-lg shadow-sm border border-brand-beige p-8 flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="bg-brand-cream w-14 h-14 rounded-full flex items-center justify-center mb-6">
      <Icon size={28} className="text-brand-navy" />
    </div>
    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">{title}</h3>
    <p className="text-brand-charcoal text-sm mb-6 flex-grow">{desc}</p>

    <div className="mt-auto">
      <p className="text-brand-navy font-bold text-lg mb-4">{price}</p>
      <Link to="/contact">
        <Button fullWidth variant="outline">{buttonText}</Button>
      </Link>
    </div>
  </div>
);

interface AccordionItemProps {
  title: string;
  icon: any;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon: Icon, items, isOpen, onToggle }) => (
  <div className="border-b border-brand-beige last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 hover:bg-brand-cream/30 transition-colors text-left"
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-brand-gold flex-shrink-0" />
        <h4 className="font-semibold text-brand-navy text-sm">{title}</h4>
      </div>
      <ChevronDown
        size={20}
        className={`text-brand-navy transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-250 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
    >
      <ul className="px-4 pb-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-sm text-brand-gray leading-relaxed">
            <Check size={16} className="text-brand-gold mt-0.5 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const IncludedServicesPanel: React.FC<{ t: typeof translations['en'] }> = ({ t }) => {
  // Detect if mobile on initial load
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    recruitment: !isMobile,
    documentation: !isMobile,
    medical: !isMobile,
    training: !isMobile,
    travel: !isMobile,
    insurance: !isMobile,
    settling: !isMobile,
    verification: !isMobile,
  });

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sections = [
    { key: 'recruitment', icon: Users, data: t.included.items.recruitment },
    { key: 'documentation', icon: FileCheck, data: t.included.items.documentation },
    { key: 'medical', icon: Stethoscope, data: t.included.items.medical },
    { key: 'training', icon: GraduationCap, data: t.included.items.training },
    { key: 'travel', icon: PlaneTakeoff, data: t.included.items.travel },
    { key: 'insurance', icon: Shield, data: t.included.items.insurance },
    { key: 'settling', icon: Heart, data: t.included.items.settling },
    { key: 'verification', icon: SearchCheck, data: t.included.items.verification },
  ];

  return (
    <div id="included-services" className="bg-white rounded-lg shadow-sm border border-brand-beige lg:sticky lg:top-[88px] overflow-hidden">
      <div className="p-6 border-b border-brand-beige">
        <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">{t.included.title}</h3>
        <span className="inline-block bg-brand-gold/20 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">
          {t.included.tag}
        </span>
      </div>

      <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
        {sections.map(({ key, icon, data }) => (
          <AccordionItem
            key={key}
            title={data.title}
            icon={icon}
            items={data.list}
            isOpen={openSections[key]}
            onToggle={() => toggleSection(key)}
          />
        ))}
      </div>

      <div className="p-6 border-t border-brand-beige">
        <Link to="/contact">
          <Button fullWidth>{t.buttons.enquire}</Button>
        </Link>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  // Helper to get nested property safely or return a default string for arrays if structure varies
  // but here type safety ensures t matches structure.

  return (
    <div className="w-full bg-brand-cream">
      {/* Header */}
      <div className="bg-brand-navy py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-brand-beige max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Quick Navigation Buttons & Language Switcher */}
      <div className="bg-white border-b border-brand-beige fixed top-[136px] md:top-[170px] left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Scrollable Nav Buttons */}
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {[
              { label: t.nav.fresh, id: 'fresh-maid' },
              { label: t.nav.ex, id: 'ex-singapore' },
              { label: t.nav.transfer, id: 'transfer-maid' },
              { label: t.nav.direct, id: 'direct-hire' },
              { label: t.nav.renewal, id: 'renewal' },
              { label: t.nav.included, id: 'included-services' },
              { label: t.nav.comparison, id: 'service-comparison' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 rounded-full bg-brand-cream text-brand-navy font-medium text-sm hover:bg-brand-navy hover:text-white transition-colors whitespace-nowrap border border-brand-beige"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 flex-shrink-0 border-l pl-4 border-gray-200">
            <Globe size={18} className="text-brand-navy" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-sm font-semibold text-brand-navy focus:outline-none cursor-pointer py-1"
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="ms">Melayu</option>
              <option value="ta">தமிழ்</option>
            </select>
          </div>

        </div>
      </div>

      {/* Main Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32 md:pt-24">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
          {/* Service Cards Column */}
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              id="fresh-maid"
              title={t.services.fresh.title}
              icon={UserCheck}
              desc={t.services.fresh.desc}
              price={t.services.fresh.price}
              buttonText={t.buttons.enquire}
            />
            <ServiceCard
              id="ex-singapore"
              title={t.services.ex.title}
              icon={RefreshCw}
              desc={t.services.ex.desc}
              price={t.services.ex.price}
              buttonText={t.buttons.enquire}
            />
            <ServiceCard
              id="transfer-maid"
              title={t.services.transfer.title}
              icon={Plane}
              desc={t.services.transfer.desc}
              price={t.services.transfer.price}
              buttonText={t.buttons.enquire}
            />
            <ServiceCard
              id="direct-hire"
              title={t.services.direct.title}
              icon={FileText}
              desc={t.services.direct.desc}
              price={t.services.direct.price}
              buttonText={t.buttons.enquire}
            />
            <ServiceCard
              id="renewal"
              title={t.services.renewal.title}
              icon={RefreshCw}
              desc={t.services.renewal.desc}
              price={t.services.renewal.price}
              buttonText={t.buttons.enquire}
            />
          </div>

          {/* Included Services Panel */}
          <div className="lg:row-span-1">
            <IncludedServicesPanel t={t} />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <section id="service-comparison" className="scroll-mt-32 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">{t.comparison.title}</h2>
            <p className="text-brand-gray">{t.comparison.desc}</p>
          </div>

          <div className="overflow-x-auto border border-brand-beige rounded-lg shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-brand-navy text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  {t.comparison.headers.map((header, i) => (
                    <th key={i} className={`px-6 py-4 whitespace-nowrap ${i === 0 ? 'sticky left-0 z-20 bg-brand-navy' : ''}`}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-beige">
                {[
                  { name: t.comparison.rows[0], fresh: true, ex: true, trans: true, direct: true, renew: t.comparison.values.guidance },
                  { name: t.comparison.rows[1], fresh: true, ex: true, trans: true, direct: false, renew: t.comparison.values.na },
                  { name: t.comparison.rows[2], fresh: true, ex: true, trans: false, direct: true, renew: false },
                  { name: t.comparison.rows[3], fresh: true, ex: true, trans: true, direct: true, renew: t.comparison.values.guidance },
                  { name: t.comparison.rows[4], fresh: true, ex: true, trans: true, direct: true, renew: t.comparison.values.guidance },
                  { name: t.comparison.rows[5], fresh: true, ex: true, trans: true, direct: true, renew: t.comparison.values.guidance },
                  { name: t.comparison.rows[6], fresh: true, ex: false, trans: false, direct: true, renew: false },
                  { name: t.comparison.rows[7], fresh: true, ex: true, trans: true, direct: false, renew: false },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-brand-cream/30' : 'bg-white'}>
                    <td className={`px-6 py-4 font-bold text-brand-navy sticky left-0 z-10 ${idx % 2 === 0 ? 'bg-brand-cream' : 'bg-white'} border-r border-brand-beige/50`}>{row.name}</td>
                    <td className="px-6 py-4">{renderCell(row.fresh)}</td>
                    <td className="px-6 py-4">{renderCell(row.ex)}</td>
                    <td className="px-6 py-4">{renderCell(row.trans)}</td>
                    <td className="px-6 py-4">{renderCell(row.direct)}</td>
                    <td className="px-6 py-4">{renderCell(row.renew)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-brand-gray text-sm italic">
              {t.comparison.footer}
            </p>
          </div>

          <div className="mt-12 text-center bg-brand-cream p-8 rounded-lg flex flex-col items-center max-w-4xl mx-auto shadow-sm">
            <h4 className="font-bold text-brand-navy text-xl mb-3">{t.comparison.cta_title}</h4>
            <p className="text-brand-charcoal mb-6 max-w-2xl">
              {t.comparison.cta_desc_1}
              <span className="font-semibold text-brand-navy">{t.comparison.cta_desc_bold}</span>
              {t.comparison.cta_desc_2}
            </p>
            <Link to="/contact">
              <Button variant="secondary">{t.buttons.consultation}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const renderCell = (value: boolean | string) => {
  if (value === true) return <Check className="text-green-600 mx-auto md:mx-0" size={20} />;
  if (value === false) return <Minus className="text-gray-300 mx-auto md:mx-0" size={20} />;
  return <span className="font-medium text-brand-charcoal">{value}</span>;
};