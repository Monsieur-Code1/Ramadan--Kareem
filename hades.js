const hades = {
    Hadis_1: { ID: 1  , Hadis : ".عن أبي أيوب الأنصاري رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: (من صام رمضان ثم أتبعه ستاً من شوال، كان كصيام الدهر) رواه مسلم."},
    Hadis_2: { ID: 2  , Hadis : ".عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: (إذا جاء رمضان فُتّحت أبواب الجنة، وغُلّقت أبواب النار، وصُفّدت الشياطين) رواه مسلم."},
    Hadis_3: { ID: 3  , Hadis :"عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: (قال الله عز وجل: كل عمل بن آدم له إلا الصيام؛ فإنه لي وأنا أجزي به، والصيام جنّة، وإذا كان يوم صوم أحدكم فلا يرفث، ولا يصخب، فإن سابّه أحد أو قاتله فليقل: إني امرؤ صائم، والذي نفس محمد بيده لخلوف فم الصائم أطيب عند الله من ريح المسك، للصائم فرحتان يفرحهما: إذا أفطر فرح، وإذا لقي ربه فرح بصومه) رواه البخاري ومسلم."},
    Hadis_4: { ID: 4  , Hadis : "عن عبد الله بن عمرو بن العاص رضي الله عنهما قال: قال النبي صلى الله عليه وسلم: (إنك لتصوم الدهر وتقوم الليل)، فقلت: نعم، قال: (إنك إذا فعلت ذلك هجمت له العين، ونَفِهَتْ له النفس، لا صام من صام الدهر، صوم ثلاثة أيام صوم الدهر كله)، قلت: فإني أطيق أكثر من ذلك، قال: (فصم صوم داود عليه السلام، كان يصوم يوماً، ويفطر يوماً). رواه البخاري ومسلم. معنى (نَفِهَتْ) أي: تعبت وكلَّت."},
    Hadis_5: { ID: 5  , Hadis : "عن سهل بن سعد رضي الله عنه أن النبي صلى الله عليه وسلم قال: (في الجنّة ثمانية أبواب، فيها باب يُسمى الريّان، لا يدخله إلا الصائمون) رواه البخاري،"},
    Hadis_6: { ID: 6  , Hadis : "عن عمرو بن العاص رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: (فصل ما بين صيامنا وصيام أهل الكتاب أكلة السَّحَر) رواه مسلم."},
    Hadis_7: { ID: 7  , Hadis : " قال رسول الله صلى الله عليه وسلم: (مَن صام رمضان إيمانًا واحتسابًا غُفِرَ له ما تَقَدَّمَ مِن ذنبه) رواه البخاري"},
    Hadis_8: { ID: 8  , Hadis : "قال صلى الله عليه وسلّم (الصَّلَوَات الخَمْس، وَالْجُمْعَة إلى الجُمْعَة، وَرَمَضَان إلى رَمَضَان، مُكَفِّرَاتٌ ما بيْنَهُنَّ إِذَا اجْتَنَبَ الكَبَائِر) رواه مسلم."},
    Hadis_9: { ID: 9  , Hadis : "قال رسول الله صلى الله عليه وسلم: (بُنِيَ الإسلام على خمس: شَهَادَة أنْ لا إلَهَ إلَّا اللَّه وأنَّ مُحَمَّدًا رَسولُ اللَّه، وإقَامِ الصَّلَاة، وإيتَاءِ الزَّكَاة، والحَجّ، وصَوْم رمضان) رواه البخاري."},
    Hadis_10:{ ID: 10 , Hadis : "قال رسول الله صلى الله عليه وسلم: (عُمْرَةً في رَمَضَانَ تَقْضِي حَجَّة - أوْ حَجَّةً مَعِي ـ) رواه البخاري."},
    Hadis_11:{ ID: 11 , Hadis :"عن عبد الله بن عباس رضي الله عنه قال: (كان رسول الله صلى الله عليه وسلم أجْوَدَ النَّاس، وكانَ أجْوَد ما يَكون في رَمَضان حِينَ يَلْقاه جِبْرِيل، وكانَ يَلْقاه في كُلِّ لَيْلَةٍ مِن رَمَضان فيُدارِسُه القُرْآن، فَلَرَسولُ اللَّه صلى الله عليه وسلم أجْوَد بالخَيْرِ مِنَ الرِّيح المُرْسَلَة) رواه البخاري"},
    Hadis_12:{ ID: 12 , Hadis :"عن أم المؤمنين عائشة رضي الله عنها: (أنَّ النبيَّ صلى الله عليه وسلم كان يَعْتَكِفُ العَشْرَ الأوَاخِرَ مِن رَمَضَانَ حتَّى تَوَفَّاهُ اللَّه) رواه البخاري"},
    Hadis_13:{ ID: 13 , Hadis :"عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: (قال اللَّه: كُلُّ عَمَلِ ابْنِ آدَمَ له، إلَّا الصِّيَامَ فإنَّه لي، وأَنَا أجْزِي به، والصِّيَامُ جُنَّة (وِقايةٌ مِن المَعاصي)، وإذَا كان يَوْم صَوْم أحَدِكُمْ فلا يَرْفُثْ ولَا يَصْخَبْ، فإنْ سَابَّهُ أحَدٌ أوْ قَاتَلَه، فَلْيَقُلْ: إنِّي امْرُؤٌ صَائِم. والذي نَفْسُ مُحَمَّدٍ بيَدِهِ، لَخُلُوفُ ((تَغيُّرُ رائحة) فَمِ الصَّائِمِ أطْيَبُ عِنْدَ اللَّه مِن رِيحِ المِسْك. لِلصَّائِمِ فَرْحَتَانِ يَفْرَحُهُمَا: إذَا أفْطَرَ فَرِح، وإذَا لَقِيَ رَبَّه فَرِحَ بصَوْمه) رواه البخاري"},
    Hadis_14:{ ID: 14 , Hadis :"عن سهل بن سعد الساعدي رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: (إن في الجنة بابًا يقال له الريان، يدخل منه الصائمون يوم القيامة، لا يدخل معهم أحد غيرهم، يقال: أين الصائمون؟ فيدخلون منه، فإذا دخل آخرهم، أغلق فلم يدخل منه أحد) رواه مسلم"},
    Hadis_15:{ ID: 15 , Hadis :"قال رسول الله صلى الله عليه وسلم: (مَنْ نسِيَ وهو صائم فأكل أو شرب فليتمَّ صومه، فإنما أطعمه الله وسقاه) رواه مسلم."},
    Hadis_16:{ ID: 16 , Hadis :"ـ قال رسول الله صلى الله عليه وسلم: (لا يزال الناس بخير ما عجَّلوا الفطر). وقال: (تسحَّروا فإن في السَّحور بركة) رواه البخاري."},
    Hadis_17:{ ID: 17 , Hadis :"قال عليه الصلاة والسلام: (إذا كان أول ليلة من رمضان صُفِّدَت الشياطين ومردة الجن وغُلِّقَت أبواب النارفلم يفتح منها باب وفتحت أبواب الجنة فلم يغلق منها باب وينادي مناد كل ليلة يا باغي الخير أقبل ويا باغي الشر أقصر ولله عتقاء من النار وذلك كل ليلة)(رواه البخاري)."},
    Hadis_18:{ ID: 18 , Hadis :"وروى البخاري عَنْ سَهْلِ بنِ سَعدٍ رَضِيَ الله عَنْهُ عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: (إِنَّ فِي الجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ القِيَامَةِ، لاَ يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ، يُقَالُ: أَيْنَ الصَّائِمُونَ؟ فَيَقُومُونَ لاَ يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ، فَإِذَا دَخَلُوا أُغْلِقَ فَلَمْ يَدْخُلْ مِنْهُ أَحَدٌ)(رواه البخاري ومسلم)."},
    Hadis_19:{ ID: 19 , Hadis :"علم النبي أبا بكر رضي الله عنه حينما سأله أن يعلمه دعاء فقال له قل: (رب إني ظلمت نفسي ظلما كثيرا ولا يغفر الذنوب إلا أنت فاغفر لي مغفرة من عندك وارحمني إنك أنت الغفور الرحيم)(رواه البخاري والترمذي)."},
    Hadis_20:{ ID: 20 , Hadis :"حَدَّثَنَا مُسَدَّدٌ حَدَّثَنَا إِسْمَاعِيلُ عَنْ أَيُّوبَ عَنْ نَافِعٍ عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: صَامَ النَّبِيِّ ﷺ عَاشُورَاءَ وَأَمَرَ بِصِيَامِهِ، فَلَمَّا فُرِضَ رَمَضَانُ تُرِكَ. وَكَانَ عَبْدُ اللَّهِ لَا يَصُومُهُ إِلَّا أَنْ يُوَافِقَ صَوْمَه رواه البخاري ."},
    Hadis_21:{ ID: 21 , Hadis :"عَنِ النَّبِيِّ ﷺ قَالَ: «إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّالِمُونَ يَوْمَ الْقِيَامَةِ لَا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ ، يُقَالُ: أَيْنَ الصَّائِمُونَ؟ فَيَقُومُونَ، لَا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ، فَإِذَا دَخَلُوا أُغْلِقَ، فَلَمْ يَدْخُلْ مِنْهُ أَحَدٌ». رواه البخاري"},
    Hadis_22:{ ID: 22 , Hadis :"عَنْ أَبِي هُرَيْرَةً رَسُ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ ﷺ قَالَ إِذَا جَاءَ رَمَضَانُ فُتِحَتْ أَبْوَابُ الْجَنَّةِ.رواه البخاري"},
    Hadis_23:{ ID: 23 , Hadis :" حدثنا عَبْدُ اللهِ بْنُ يُوسُفَ أَخْبَرَنَا مَالِكٌ عَنْ هِشَامِ بْنِ عُرْوَةَ عَنْ أَبِيهِ عَنْ عَائِشَة رَضِيَ اللَّهُ عَنْهَا زَوْجِ النَّبِيِّ ﷺ أَنَّ حَمْزَةَ بْنَ عَمْرٍو الْأَسْلَمِيُّ قَالَ لِلنَّبِيِّ : أَصُومُ في المشفر - وكان كثير الصِّيَام - فَقَالَ: إِنْ شِئتَ فَصُمْ، وَإِنْ شِئْتَ فَأَفْطِرُ». رواه البخاري"},
    Hadis_24:{ ID: 24 , Hadis :"قول النبي ﷺ لَمِنْ ظُلْلَ عَلَيْهِ وَاشْتَدَّ الْخَرُّ لَيْسَ مِنَ الْبِرِّ الصَّوْمُ فِي السَّفَرِ رواه البخاري"},
    Hadis_25:{ ID: 25 , Hadis :"عن أَبِي هُرَيْرَةَ علي رضي اللَّهُ قال عَنِ النَّبِيِّ ﷺ قَالَ: «إِذَا نَسِيَ فَأَكَلَ وَشَرِبَ فَلْيُتِمَّ صَوْمَهُ، فَإِنَّمَا أَطْعَمَهُ اللَّهُ وَسَقَاهُ . رواه البخاري"},
    Hadis_26:{ ID: 26 , Hadis :". وَقَالَ أَبُو هُرَيْرَةَ عَنِ النَّبِيِّ ﷺ لَوْلَا أَنْ أَشُقَّ عَلَى أُمَّنِي لَأَمَرْتُهُمْ بِالسَّوَاكِ عِنْدَ كُلِّ وُضُوءٍ. وَقَالَتْ عَائِشَةُ عَنِ النَّبِيِّ السَّوَاكُ مَطْهَرَةٌ لِلْقَمِ مَرْضَاةً لِلرَّبِّ رواه البخاري"},
    Hadis_27:{ ID: 27 , Hadis :"قول النبي ﷺ: إذا أقبل الليل من هاهنا وأدبر النهار من هاهنا وغربت الشمس فقد أفطر الصائم.رواه البخاري"},
    Hadis_28:{ ID: 28 , Hadis :"قال النبي صلى الله عليه وسلم : من مات وعليه صيام صام عنه وليه .رواه البخاري"},
    Hadis_29:{ ID: 29 , Hadis :" قال رسول الله صلى الله عليه وسلم لا تُواصِلُوا، قالوا: إنَّكَ تُواصِلُ، قالَ: إنِّي لَسْتُ مِثْلَكُمْ، إنِّي أبِيتُ يُطْعِمُنِي رَبِّي ويَسْقِينِي، فَلَمْ يَنْتَهُوا عَنِ الوِصالِ، قالَ: فَواصَلَ بهِمُ النبيُّ صَلَّى اللهُ عليه وسلَّمَ يَومَيْنِ أوْ لَيْلَتَيْنِ، ثُمَّ رَأَوُا الهِلالَ، فقالَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ: لو تَأَخَّرَ الهِلالُ لَزِدْتُكُمْ كالْمُنَكِّلِ لهمْ.رواه البخاري"},
    Hadis_30:{ ID: 30 , Hadis :"قالَ رسولُ اللَّهِ ﷺ: إِذا صُمْتَ مِنَ الشَّهْرِ ثَلاثًا، فَصُمْ ثَلاثَ عَشْرَةَ، وَأَرْبعَ عَشْرَةَ، وخَمْسَ عَشْرة, رواه البخاري"},
}
 
// 

const zekr = [
  { id: 1,  Dhikr: "سبحان الله" },
  { id: 2,  Dhikr: "الحمد لله" },
  { id: 3,  Dhikr: "لا إله إلا الله" },
  { id: 4,  Dhikr: "سبحان الله وبحمده" },
  { id: 5,  Dhikr: "لا حول ولا قوة إلا بالله" },
  { id: 6,  Dhikr: "سبحان الله العظيم" },
  { id: 7,  Dhikr: "الحمد لله رب العالمين" },
  { id: 8,  Dhikr: "لا إله إلا الله وحده لا شريك له الملك وله الحمد وهو علي كل شي قدير" },
  { id: 9,  Dhikr: "سبحان الله وبحمده سبحان الله العظيم" },
  { id: 10, Dhikr: "لا حول ولا قوة الا بالله العلي العظيم" },
  { id: 11, Dhikr: "سبحان الله الحمد لله لا إله إلا الله" },
  { id: 12, Dhikr: "لا إله إلا الله وحده لا شريك له" },
  { id: 13, Dhikr: "صلي علي محمد" },
];


const ramadanTimings = {
    day_1:  { date: "2025-03-01",fajr: "4:54 AM", sunrise: "6:21 AM", dhuhr: "12:07 PM", asr: "3:25 PM", maghrib: "5:54 PM", isha: "7:11 PM" },
    day_2:  { date: "2025-03-02",fajr: "4:53 AM", sunrise: "6:20 AM", dhuhr: "12:07 PM", asr: "3:26 PM", maghrib: "5:55 PM", isha: "7:12 PM" },
    day_3:  { date: "2025-03-03",fajr: "4:52 AM", sunrise: "6:19 AM", dhuhr: "12:07 PM", asr: "3:26 PM", maghrib: "5:55 PM", isha: "7:13 PM" },
    day_4:  { date: "2025-03-04",fajr: "4:51 AM", sunrise: "6:17 AM", dhuhr: "12:07 PM", asr: "3:26 PM", maghrib: "5:56 PM", isha: "7:13 PM" },
    day_5:  { date: "2025-03-05",fajr: "4:50 AM", sunrise: "6:16 AM", dhuhr: "12:06 PM", asr: "3:27 PM", maghrib: "5:57 PM", isha: "7:14 PM" },
    day_6:  { date: "2025-03-06",fajr: "4:49 AM", sunrise: "6:15 AM", dhuhr: "12:06 PM", asr: "3:27 PM", maghrib: "5:57 PM", isha: "7:15 PM" },
    day_7:  { date: "2025-03-07",fajr: "4:48 AM", sunrise: "6:14 AM", dhuhr: "12:06 PM", asr: "3:27 PM", maghrib: "5:58 PM", isha: "7:15 PM" },
    day_8:  { date: "2025-03-08",fajr: "4:47 AM", sunrise: "6:13 AM", dhuhr: "12:06 PM", asr: "3:27 PM", maghrib: "5:59 PM", isha: "7:16 PM" },
    day_9:  { date: "2025-03-09",fajr: "4:45 AM", sunrise: "6:12 AM", dhuhr: "12:05 PM", asr: "3:28 PM", maghrib: "5:59 PM", isha: "7:17 PM" },
    day_10: { date: "2025-03-10",fajr: "4:44 AM", sunrise: "6:11 AM", dhuhr: "12:05 PM", asr: "3:28 PM", maghrib: "6:00 PM", isha: "7:17 PM" },
    day_11: { date: "2025-03-11",fajr: "4:43 AM", sunrise: "6:09 AM", dhuhr: "12:05 PM", asr: "3:28 PM", maghrib: "6:01 PM", isha: "7:18 PM" },
    day_12: { date: "2025-03-12",fajr: "4:42 AM", sunrise: "6:08 AM", dhuhr: "12:05 PM", asr: "3:28 PM", maghrib: "6:01 PM", isha: "7:19 PM" },
    day_13: { date: "2025-03-13",fajr: "4:41 AM", sunrise: "6:07 AM", dhuhr: "12:04 PM", asr: "3:29 PM", maghrib: "6:02 PM", isha: "7:19 PM" },
    day_14: { date: "2025-03-14",fajr: "4:39 AM", sunrise: "6:06 AM", dhuhr: "12:04 PM", asr: "3:29 PM", maghrib: "6:03 PM", isha: "7:20 PM" },
    day_15: { date: "2025-03-15",fajr: "4:38 AM", sunrise: "6:05 AM", dhuhr: "12:04 PM", asr: "3:29 PM", maghrib: "6:03 PM", isha: "7:21 PM" },
    day_16: { date: "2025-03-16",fajr: "4:37 AM", sunrise: "6:03 AM", dhuhr: "12:03 PM", asr: "3:29 PM", maghrib: "6:04 PM", isha: "7:21 PM" },
    day_17: { date: "2025-03-17",fajr: "4:36 AM", sunrise: "6:02 AM", dhuhr: "12:03 PM", asr: "3:29 PM", maghrib: "6:05 PM", isha: "7:22 PM" },
    day_18: { date: "2025-03-18",fajr: "4:34 AM", sunrise: "6:01 AM", dhuhr: "12:03 PM", asr: "3:29 PM", maghrib: "6:05 PM", isha: "7:23 PM" },
    day_19: { date: "2025-03-19",fajr: "4:33 AM", sunrise: "6:00 AM", dhuhr: "12:03 PM", asr: "3:30 PM", maghrib: "6:06 PM", isha: "7:23 PM" },
    day_20: { date: "2025-03-20",fajr: "4:32 AM", sunrise: "5:59 AM", dhuhr: "12:02 PM", asr: "3:30 PM", maghrib: "6:06 PM", isha: "7:24 PM" },
    day_21: { date: "2025-03-21",fajr: "4:31 AM", sunrise: "5:57 AM", dhuhr: "12:02 PM", asr: "3:30 PM", maghrib: "6:07 PM", isha: "7:25 PM" },
    day_22: { date: "2025-03-22",fajr: "4:29 AM", sunrise: "5:56 AM", dhuhr: "12:02 PM", asr: "3:30 PM", maghrib: "6:08 PM", isha: "7:25 PM" },
    day_23: { date: "2025-03-23",fajr: "4:28 AM", sunrise: "5:55 AM", dhuhr: "12:01 PM", asr: "3:30 PM", maghrib: "6:08 PM", isha: "7:26 PM" },
    day_24: { date: "2025-03-24",fajr: "4:27 AM", sunrise: "5:54 AM", dhuhr: "12:01 PM", asr: "3:30 PM", maghrib: "6:09 PM", isha: "7:27 PM" },
    day_25: { date: "2025-03-25",fajr: "4:25 AM", sunrise: "5:53 AM", dhuhr: "12:01 PM", asr: "3:30 PM", maghrib: "6:09 PM", isha: "7:27 PM" },
    day_26: { date: "2025-03-26",fajr: "4:24 AM", sunrise: "5:51 AM", dhuhr: "12:00 PM", asr: "3:30 PM", maghrib: "6:10 PM", isha: "7:28 PM" },
    day_27: { date: "2025-03-27",fajr: "4:23 AM", sunrise: "5:50 AM", dhuhr: "12:00 PM", asr: "3:30 PM", maghrib: "6:11 PM", isha: "7:29 PM" },
    day_28: { date: "2025-03-28",fajr: "4:21 AM", sunrise: "5:49 AM", dhuhr: "12:00 PM", asr: "3:30 PM", maghrib: "6:11 PM", isha: "7:29 PM" },
    day_29: { date: "2025-03-29",fajr: "4:20 AM", sunrise: "5:48 AM", dhuhr: "12:00 PM", asr: "3:30 PM", maghrib: "6:12 PM", isha: "7:30 PM" },
    day_30: { date: "2025-03-30",fajr: "4:19 AM", sunrise: "5:47 AM", dhuhr: "12:00 PM", asr: "3:30 PM", maghrib: "6:13 PM", isha: "7:31 PM" }
    };
    const questions = {
        question_1:  {id: "1",  Qs: "ما هو أول مسجد بني في الإسلام؟", repons: "مسجد قباء"},
        question_2:  {id: "2",  Qs: "ما هو الركن الأول من أركان الإسلام؟", repons: "الشهادتان"},
        question_3:  {id: "3",  Qs: "من هو خاتم الأنبياء؟", repons: "النبي محمد ﷺ"},
        question_4:  {id: "4",  Qs: "كم عدد الصلوات المفروضة في اليوم؟", repons: "خمس صلوات"},
        question_5:  {id: "5",  Qs: "ما هي السورة التي تعادل ثلث القرآن؟", repons: "سورة الإخلاص"},
        question_6:  {id: "6",  Qs: "ما هو الاسم الآخر لسورة الفاتحة؟", repons: "أم الكتاب"},
        question_7:  {id: "7",  Qs: "من هو أول نبي صام؟", repons: "النبي آدم عليه السلام"},
        question_8:  {id: "8",  Qs: "في أي شهر أنزل القرآن الكريم؟", repons: "شهر رمضان"},
        question_9:  {id: "9",  Qs: "ما هي أطول سورة في القرآن الكريم؟", repons: "سورة البقرة"},
        question_10: {id: "10", Qs: "من هو النبي الذي ابتلعه الحوت؟", repons: "النبي يونس عليه السلام"},
        question_11: {id: "11", Qs: "ما هو اسم والدة النبي محمد ﷺ؟", repons: "آمنة بنت وهب"},
        question_12: {id: "12", Qs: "كم عدد سنوات الوحي الذي نزل على النبي ﷺ؟", repons: "23 سنة"},
        question_13: {id: "13", Qs: "من هو الصحابي الذي أطلق عليه لقب الفاروق؟", repons: "عمر بن الخطاب رضي الله عنه"},
        question_14: {id: "14", Qs: "كم عدد أجزاء القرآن الكريم؟", repons: "30 جزءًا"},
        question_15: {id: "15", Qs: "ما هي الصلاة التي ليس فيها ركوع ولا سجود؟", repons: "صلاة الجنازة"},
        question_16: {id: "16", Qs: "ما هو أول جبل وضع على الأرض؟", repons: "جبل أبي قبيس"},
        question_17: {id: "17", Qs: "ما هو الطائر الذي تكلم في القرآن؟", repons: "الهدهد"},
        question_18: {id: "18", Qs: "كم عدد أبواب الجنة؟", repons: "ثمانية أبواب"},
        question_19: {id: "19", Qs: "من هو النبي الذي سمي بـ 'ذو النون'؟", repons: "النبي يونس عليه السلام"},
        question_20: {id: "20", Qs: "ما هي السورة التي بدأت بكلمة 'الرحمن'؟", repons: "سورة الرحمن"},
        question_21: {id: "21", Qs: "من هو الملك الذي كلف بحمل العرش؟", repons: "الملائكة الحاملون للعرش"},
        question_22: {id: "22", Qs: "ما هو اسم السيف الخاص بالنبي محمد ﷺ؟", repons: "ذو الفقار"},
        question_23: {id: "23", Qs: "كم عدد الأنبياء الذين ذكروا في القرآن؟", repons: "25 نبيًا"},
        question_24: {id: "24", Qs: "ما هي أعظم آية في القرآن الكريم؟", repons: "آية الكرسي"},
        question_25: {id: "25", Qs: "ما هو الشيء الذي حرمه الله على نفسه؟", repons: "الظلم"},
        question_26: {id: "26", Qs: "من هو الصحابي الذي كان أول من جهر بالقرآن؟", repons: "عبد الله بن مسعود رضي الله عنه"},
        question_27: {id: "27", Qs: "ما هو اسم الغار الذي اختبأ فيه النبي ﷺ مع أبي بكر؟", repons: "غار ثور"},
        question_28: {id: "28", Qs: "ما هي السورة التي تسمى 'قلب القرآن'؟", repons: "سورة يس"},
        question_29: {id: "29", Qs: "ما هو اسم الدابة التي ركبها النبي ﷺ في رحلة الإسراء والمعراج؟", repons: "البراق"},
        question_30: {id: "30", Qs: "كم عدد سور القرآن الكريم؟", repons: "114 سورة"}
    };

let dhikr=document.getElementById("dhikr")
   
function updateDhikr() {
    const randomIndex = Math.floor(Math.random() * zekr.length); // اختيار عنصر عشوائي
    dhikr.textContent = zekr[randomIndex].Dhikr;
}

// تحديث الذكر كل دقيقة (60,000 ميلي ثانية)
setInterval(updateDhikr, 60000);

// تحديث الذكر عند تحميل الصفحة أول مرة
updateDhikr();