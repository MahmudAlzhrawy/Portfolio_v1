// 'use client';
// import { usePathname, useRouter } from 'next/navigation';
// import { useLocale } from 'next-intl';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();

//   function switchLocale() {
//     const nextLocale = locale === 'en' ? 'ar' : 'en';
//     router.replace(pathname, { locale: nextLocale });
//   }

//   return (
//     <button
//       onClick={switchLocale}
//       className="px-4 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-500 transition"
//     >
//       {locale === 'en' ? 'العربية' : 'English'}
//     </button>
//   );
// }
