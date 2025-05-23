import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define your language resources
const resources = {
  en: {
    translation: {
      // Banner translations
      banner_title: "Dost Finans",
      banner_subtitle: "Your financial friend",
      banner_content:
        "Founded in 2023, Dost Finans has quickly distinguished itself in the financial market with its innovative approach, transparent conditions, and customer-oriented service model.",
      banner_btn: "Learn More",

      // Navbar translations
      faktorinq: "Factoring",
      lizinq: "Leasing",
      magazalar: "Store Network",
      vakansiyalar: "Vacancies",
      odemek: "Pay",
      biznesFaktorinqi: "Business Factoring",
      partnyorFaktorinqi: "Partner Factoring",
      avtomobilLizinqi: "Car Leasing",
      mebel: "Furniture",
      meishat: "Household",
      elektronika: "Electronics",
      mobilTelefonlar: "Mobile Phones",
      diger: "Other",
      login: "Login",
      register: "Register",
      profile: "Profile",
      language: "Language",
      search_placeholder: "Search.....", // Search placeholder

      // BannerTwo translations
      business_factoring: "Business Factoring",
      business_factoring_description:
        "Business factoring is a financing process where business owners sell part or all of their invoices to a factoring company in order to improve cash flow within their business or company.",
      business_factoring_video_title: "What is Business Factoring?",
      advantages_title: "Advantages",
      advantages_subtitle:
        "We help millions of customers and businesses fulfill their dreams every day.",
      financial_flow: "Financial Flow",
      convert_invoices_to_cash: "Easily convert your unpaid invoices into cash",
      time_saving: "Time Saving",
      free_from_payment_follow_up:
        "Free yourself from the burden of payment follow-up",
      fast_solution: "Fast Solution",
      quick_and_easy_funding: "Get fast and easy financing",
      technical_support: "Technical Support",
      high_technology_and_agile_decision_making:
        "Benefit from high technology and agile decision-making",

      // AboutAreaTwo translations
      business_factoring_easy: "Getting Business Factoring is Now Easy",
      business_factoring_description:
        "Increase your business's cash flow and financial flexibility with ease. Get your payments quickly and accelerate your growth with business factoring!",
      business_mistakes: "Mistakes to Avoid for a Successful Business",
      startup_principles:
        "Key Principles for Your Startup to Strengthen in the Market",
      grow_your_business: "5 Key Ways to Rapidly Grow Your Business",
      common_startup_mistakes:
        "Common Mistakes Startups Make and How to Solve Them",
      more_information_prompt:
        "Fill in the form below for more information, and our team will get in touch with you.",
      apply_button: "Apply Now",
      factoring_application: "Factoring Application",
      saa_label: "Fullname",
      id_series_number_label: "ID Series and Number",
      issuing_authority_label: "Issuing Authority",
      issuance_date_label: "Issuance Date",
      fin_label: "FIN",
      birth_date_label: "Date of Birth",
      registration_address_label: "Registration Address",
      actual_address_label: "Actual Address",
      email_label: "Email",
      workplace_info_label: "Workplace Information",
      employer_label: "Employer",
      position_label: "Position",
      salary_label: "Salary",
      additional_income_label: "Additional Income",
      contact_phone_label: "Contact Phone",
      data_confirmation_text:
        "I confirm the accuracy of my information, consent to the query of my credit obligations from the AKB, and agree to be registered in the Asan Finans and other data databases.",
      submit_button: "Submit",

      // BannerThree translations
      partner_factoring_title: "Partner Factoring",
      partner_factoring_description:
        "Partner factoring is a unique financing method that helps you increase your sales turnover easily both in-store and online by offering installment payment options to buyers in retail sectors and service industries.",
      apply_button: "Apply Now",
      factoring_application_title: "Factoring Application",
      saa_label: "Fullname",
      id_series_number_label: "ID Series and Number",
      issuing_authority_label: "Issuing Authority",
      issuance_date_label: "Issuance Date",
      fin_label: "FIN",
      birth_date_label: "Date of Birth",
      registration_address_label: "Registration Address",
      actual_address_label: "Actual Address",
      email_label: "Email",
      workplace_info_label: "Workplace Information",
      employer_label: "Employer",
      position_label: "Position",
      salary_label: "Salary",
      additional_income_label: "Additional Income",
      contact_phone_label: "Contact Phone",
      data_confirmation_text:
        "I confirm the accuracy of my information, consent to the query of my credit obligations from the AKB, and agree to be registered in the Asan Finans and other data databases.",
      submit_button: "Submit",
      partner_factoring_title: "Partner Factoring",
      partner_factoring_description:
        "Partner factoring is a unique financing method that helps you increase your sales turnover easily both in-store and online by offering installment payment options to buyers in retail sectors and service industries.",

      partners_title: "Our Partners",
      furniture: "Furniture",
      electronics_and_household_appliances:
        "Electronics and Household Appliances",
      mobile_devices: "Mobile Devices",
    },
  },
  az: {
    translation: {
      // Banner translations
      banner_title: "Dost Finans",
      banner_subtitle: "Sizin maliyyə dostunuz",
      banner_content:
        "2023-cü ildə təsis olunan Dost Finans, qısa müddətdə innovativ yanaşması, şəffaf şərtləri və müştəri yönümlü xidmət modeli ilə maliyyə bazarında özünü fərqləndirməyi bacarmışdır.",
      banner_btn: "Ətraflı bax",

      // Navbar translations
      faktorinq: "Faktorinq",
      lizinq: "Lizinq",
      magazalar: "Mağazalar şəbəkəsi",
      vakansiyalar: "Vakansiyalar",
      odemek: "Ödəniş et",
      biznesFaktorinqi: "Biznes Faktorinqi",
      partnyorFaktorinqi: "Partnyor Faktorinqi",
      avtomobilLizinqi: "Avtomobil Lizinqi",
      mebel: "Mebel",
      meishat: "Məişət",
      elektronika: "Elektronika",
      mobilTelefonlar: "Mobil telefonlar",
      diger: "Digər",
      login: "Giriş",
      register: "Qeydiyyat",
      profile: "Profil",
      language: "Dil",
      search_placeholder: "Axtar.....",

      // BannerTwo translations
      business_factoring: "Biznes Faktorinqi",
      business_factoring_description:
        "Biznes faktorinqi biznes sahiblərinin müəssisə daxilində nağd pul axınını yaxşılaşdırmaq üçün ödənilməli invoyslarının bir hissəsini və ya hamısını faktorinq şirkətinə satması ilə həyata keçirilən maliyyələşdirmə prosesidir.",
      business_factoring_video_title: "Biznes faktorinqi nədir?",
      advantages_title: "Üstünlüklər",
      advantages_subtitle:
        "Biz hər gün milyonlarla müştəri və bizneslərin arzularının reallaşmağına dəstək oluruq.",
      financial_flow: "Maliyyə axını",
      convert_invoices_to_cash:
        "Ödənilməmiş fakturalarınızı asanlıqla nağd pula çevirin",
      time_saving: "Vaxta qənaət",
      free_from_payment_follow_up: "Ödənişlərin təqibatı yükündən azad olun",
      fast_solution: "Sürətli həll",
      quick_and_easy_funding: "Tez və asan maliyyələşmə imkanı əldə edin",
      technical_support: "Texniki dəstək",
      high_technology_and_agile_decision_making:
        "Yüksək texnologiya və çevik qərar qəbul etmə üstünlüyündən faydalanın",

      // AboutAreaTwo translations
      business_factoring_easy:
        "Biznes faktorinqini əldə etmək indi çox asandır",
      business_factoring_description:
        "Biznesinizin nağd pul axınını artırmaq və maliyyə çevikliyini təmin etmək indi daha asandır. Biznes faktorinqi ilə ödənişlərinizi tezliklə əldə edin və inkişafınızı sürətləndirin!",
      business_mistakes:
        "Uğurlu biznes üçün qarşısını almalı olduğunuz səhvlər",
      startup_principles:
        "Startapınızın bazarda möhkəmlənməsi üçün əsas prinsiplər",
      grow_your_business: "Biznesinizi sürətlə böyütməyin 5 əsas yolu",
      common_startup_mistakes:
        "Startapların ən çox buraxdığı səhvlər və onların həlli",
      more_information_prompt:
        "Daha çox məlumat əldə etmək istəyirsinizsə, aşağıdakı formanı doldurun və komandamız sizinlə əlaqə saxlasın.",
      apply_button: "Müraciət edin",
      factoring_application: "Faktorinq müraciəti",
      saa_label: "S.A.A.",
      id_series_number_label: "İD seriyası və nömrəsi",
      issuing_authority_label: "Verən orqan",
      issuance_date_label: "Verilmə tarixi",
      fin_label: "FİN",
      birth_date_label: "Doğum tarixi",
      registration_address_label: "Qeydiyyat üzrə ünvan",
      actual_address_label: "Faktiki ünvan",
      email_label: "E-mail",
      workplace_info_label: "İş yeri haqqında məlumat",
      employer_label: "İşlədiyiniz yer",
      position_label: "Vəzifəniz",
      salary_label: "Əmək haqqı",
      additional_income_label: "Əlavə gəlirlər",
      contact_phone_label: "Əlaqə telefonu",
      data_confirmation_text:
        "Məlumatlarımın doğruluğunu təsdiq edir, kredit öhdəliklərim barədə məlumatların AKB-dən sorğu edilməsinə, Asan Finans və digər məlumat bazalarından qeydiyyatdan keçirilməsinə razılıq verirəm.",
      submit_button: "Göndər",
      partner_factoring_title: "Partnyor Faktorinqi",

      partner_factoring_description:
        "Partnyor faktorinqi pərakəndə satış sektorları, eləcə də xidmət sahələrinin alıcılarına hissə-hissə ödəniş imkanı tanıyan, innovativ həllərimizdən istifadə edərək satış dövriyyənizi elə öz mağazanızda və onlayn formada asanlıqla artırmağınıza kömək edən unikal bir maliyyələşdirmə üsuludur.",
      partners_title: "Çalışdığımız partnyorlar",
      furniture: "Mebel",
      electronics_and_household_appliances: "Elektronika və məişət texnikası",
      mobile_devices: "Mobil cihazlar",
    },
  },
  ru: {
    translation: {
      banner_title: "Дост Финанс",
      banner_subtitle: "Ваш финансовый друг",
      banner_content:
        "Основанный в 2023 году, Дост Финанс быстро зарекомендовал себя на финансовом рынке благодаря инновационному подходу, прозрачным условиям и ориентированной на клиента модели обслуживания.",
      banner_btn: "Подробнее",

      // Navbar translations
      faktorinq: "Факторинг",
      lizinq: "Лизинг",
      magazalar: "Сеть магазинов",
      vakansiyalar: "Вакансии",
      odemek: "Оплатить",
      biznesFaktorinqi: "Бизнес Факторинг",
      partnyorFaktorinqi: "Партнёрский факторинг",
      avtomobilLizinqi: "Автомобильный лизинг",
      mebel: "Мебель",
      meishat: "Бытовая техника",
      elektronika: "Электроника",
      mobilTelefonlar: "Мобильные телефоны",
      diger: "Прочее",
      login: "Войти",
      register: "Регистрация",
      profile: "Профиль",
      language: "Язык",
      search_placeholder: "Поиск.....",

      // BannerTwo translations
      business_factoring: "Факторинг",
      business_factoring_description:
        "Факторинг бизнеса — это процесс финансирования, при котором владельцы бизнеса продают часть или все свои счета-фактуры факторинговой компании для улучшения денежного потока в своем бизнесе.",
      business_factoring_video_title: "Что такое бизнес факторинг?",
      advantages_title: "Преимущества",
      advantages_subtitle:
        "Мы помогаем миллионам клиентов и бизнеса реализовать их мечты каждый день.",
      financial_flow: "Денежный поток",
      convert_invoices_to_cash:
        "Легко превращайте неоплаченные счета в наличные",
      time_saving: "Экономия времени",
      free_from_payment_follow_up:
        "Освободитесь от необходимости отслеживания платежей",
      fast_solution: "Быстрое решение",
      quick_and_easy_funding: "Получите быстрое и легкое финансирование",
      technical_support: "Техническая поддержка",
      high_technology_and_agile_decision_making:
        "Используйте преимущества высоких технологий и гибкого принятия решений",

      // AboutAreaTwo translations
      business_factoring_easy: "Получить бизнес-факторинг теперь очень легко",
      business_factoring_description:
        "Увеличьте денежный поток вашего бизнеса и обеспечьте финансовую гибкость с легкостью. Получите свои платежи быстро и ускорьте свой рост с бизнес-факторингом!",
      business_mistakes: "Ошибки, которых нужно избегать для успешного бизнеса",
      startup_principles:
        "Ключевые принципы для укрепления вашего стартапа на рынке",
      grow_your_business: "5 основных способов быстро развить ваш бизнес",
      common_startup_mistakes: "Ошибки стартапов и их решения",
      more_information_prompt:
        "Заполните форму ниже для получения дополнительной информации, и наша команда свяжется с вами.",
      apply_button: "Подать заявку",
      factoring_application: "Заявка на факторинг",
      saa_label: "С.А.А.",
      id_series_number_label: "Серия и номер ID",
      issuing_authority_label: "Выдавший орган",
      issuance_date_label: "Дата выдачи",
      fin_label: "ФИН",
      birth_date_label: "Дата рождения",
      registration_address_label: "Адрес регистрации",
      actual_address_label: "Фактический адрес",
      email_label: "Email",
      workplace_info_label: "Информация о рабочем месте",
      employer_label: "Работодатель",
      position_label: "Должность",
      salary_label: "Зарплата",
      additional_income_label: "Дополнительные доходы",
      contact_phone_label: "Контактный телефон",
      data_confirmation_text:
        "Я подтверждаю правильность моих данных, соглашаюсь на запрос информации о моих кредитных обязательствах из АКБ и регистрацию в Asan Finans и других базах данных.",
      submit_button: "Отправить",
      partner_factoring_title: "Партнёрский факторинг",

      partner_factoring_description:
        "Партнёрский факторинг — это уникальный метод финансирования, который помогает вам увеличить оборот продаж как в магазине, так и онлайн, предлагая покупателям в розничных секторах и сфере услуг возможность оплаты в рассрочку.",
      partners_title: "Наши партнёры",
      furniture: "Мебель",
      electronics_and_household_appliances: "Электроника и бытовая техника",
      mobile_devices: "Мобильные устройства",
    },
  },
};

i18n
  .use(initReactI18next) // Hook the i18n to React
  .init({
    resources,
    lng: "en", // Default language
    keySeparator: false, // We don't need keys separated by dots
    interpolation: {
      escapeValue: false, // React already escapes variables
    },
  });

export default i18n;
