const districtData = {
    Agra: [
        "Ace College of Engineering and Management",
        "Anand College of Pharmacy",
        "Bhaavya Technical Institute",
        "Cbs College of Polytechnic",
        "D. E. I. Technical College",
        "Dev Institute of Technical Education",
        "Dev Technical Campus",
        "Divya College of Pharmacy",
        "Dr. B. R. Ambedkar Polytechnic",
        "Gayatri College of Engineering and Technology",
        "Government Leather Institute, Agra",
        "Government Polytechnic, Mankeda, Agra",
        "Heritage Technical College",
        "Hindustan Institute of Technology and Management",
        "K. P. Engineering College",
        "K. V. Pharmacy College",
        "Kunal College of Pharmacy",
        "Kunal Professional Education Academy",
        "Neelam College of Engineering and Technology",
        "Raja Balwant Singh Polytechnic, Bichpuri, Agra",
        "Sai Nath College",
    ],
    Aligarh: [
        "A. D. R. S. Institute of Technology and Management",
        "Acn College of Polytechnic",
        "Institute of Technology and Management (341)",
        "Mahalwar Institute of Pharmacy",
        "Mahalwar Institute of Technology",
        "Mahamaya Polytechnic for Information Technology",
        "Shivdan Singh Institute of Technology and Management",
        "Sri Sai Institute of Pharmacy",
        "University Polytechnic",
        "Vision Institute of Technology",
        "Vivekananda College of Polytechnic",
        "Vivekananda College of Technology and Management, Aligarh",
    ],
    Allahabad: [
        "Government Girls Polytechnic Meja",
        "Government Girls Polytechnic, Allahabad",
        "Handia Polytechnic Handia Allahabad",
        "Hanswahini Institute of Science and Technology",
        "Hmfa Memorial Institute of Engineering and Technology",
        "Infinity Institute of Technology",
        "Institute of Engineering and Rural Technology",
        "Lal Bahadur Shastri Polytechnic",
        "Ldc Institute of Technical Studies",
        "M. G. Polytechnic",
        "Mahaveer Institute of Technology",
        "Northern Regional Institute of Printing Technology",
        "Prayag Institute of Technology and Management",
        "Ruchi’s Institute of Creative Arts",
        "Shivaji Institute of Technology and Management",
        "Sp Memorial Institute Technology",
    ],
    "Ambedkar Nagar": [
        "Chhatrapati Sahuji Maharaj Government Polytechnic, Ambedkarnagar",
        "Government Polytechnic Baijpur Bhiti, Ambedkarnagar",
        "Vishwanath Memorial College of Pharmacy",
    ],
    Amethi: ["Government Girls Polytechnic, Amethi", "Sanjay Gandhi Polytechnic"],
    Auraiya: [
        "Baba Saheb Dr. Bhimrao Ambedkar Government Polytechnic Haidarpur Auraiya",
        "M. M. I. T., Auraiya",
    ],
    Azamgarh: [
        "Azad Polytechnic, Bharthipur",
        "Baba Vishwanath Institute of Technology",
        "Baijnath Ramnaresh College of Technology",
        "Government Polytechnic, Bhilihili, Azamgarh (Centrally Assisted)",
        "M. S. D. Polytechnic College",
        "Maa Buddha National Institute of Engineering and Technology",
        "Maa Vaishno Maa Sharda Polytechnic",
        "Pharmacy College",
        "Savitribai Phule Government Polytechnic",
        "Shri Kashi Chandra Dev Yadav Pravidhik Shikshan Sansthan",
        "Swami Sahajanand Polytechnic",
    ],
    Baghpat: [
        "Digamber Jain Polytechnic Baraut",
        "Gayatri Devi Institute of Management and Technology",
        "Government Polytechnic Kirthal Chaprauli Bagphat",
        "Indo – Universal College of Management and Technology",
        "Lakhmiri Institute of Engineering and Technology",
        "Saras College of Pharmacy",
        "Shree Krishna College of Engineering",
        "Shri Gopichand College of Pharmacy",
        "Shri Krishna College of Engineering",
    ],
    Bahraich: [
        "Government Girls Polytechnic, Risia, Nanpara, Bahraich",
        "Government Polytechnic Bahraich",
        "Sanjivani Institute of Technology and Management",
    ],
    Ballia: [
        "Government Girls Polytechnic Ballia",
        "Government Polytechnic Jegirsand",
        "Shri Sahdev Paudhariya Polytechnic College",
        "Smt. Fulehra Smarak College of Polytechnic",
        "Town Polytechnic, Ballia",
    ],
    Balrampur: [
        "Chhatrapati Sahuji Maharaj Government Polytechnic, Balrampur (Running at Govt Polt. Gonda)",
        "Shakti College of Pharmacy",
    ],
    Banda: [
        "Government Polytechnic Banda",
        "Government Polytechnic, Naraini (Banda) U. P.",
        "Kali Charan Nigam Institute of Technology",
    ],
    Barabanki: [
        "Emerald – 9 Institute of Management and Technology",
        "Gokaran Narvadeshwar Institute of Technology and Management",
        "Government Polytechnic Barabanki",
        "Government Polytechnic Jamunia Deeh Harakh (Barabanki)",
        "Government Polytechnic, Kursi Road, Barabanki",
        "Hind Institute of Medical Science",
        "Jahangirabad Institute of Technology for Polytechnic",
        "Nishat Hospitals and Institute of Paramedical Sciences",
        "Sagar Institute of Technology and Management",
        "Sagar Institute of Technology and Management, Department of Pharmacy",
        "Seth Vishambhar Nath Institute of Engineering and Technology",
        "Sherwood College of Engineering Research and Technology",
        "Trc Mahavidyalaya, Department of Pharmacy",
    ],
    Bareilly: [
        "A. N. A College of Engineering and Management Studies",
        "Dsr College of Polytechnic",
        "Focus Institute of Engineering and Management",
        "Future Institute of Engineering and Technology",
        "Government Girls Polytechnic Bareilly",
        "Government Polytechnic Bareilly",
        "Prem Prakash Gupta Institute of Engineering",
        "Rajshree Institute of Management and Technology",
        "Rakshpal Bahadur College of Engineering and Technology, Bareilly",
        "Rakshpal Bahadur College of Pharmacy, Bareilly",
        "S. R. Institute of Pharmacy",
        "Shri Jeet Ram Smarak Institute of Engineering and Technology",
        "Shri Jeet Ram Smarak Institute of Polytechnic",
        "Shri Siddhi Vinayak Polytechnic",
    ],
    Basti: [
        "Government Polytechnic Basti",
        "Government Polytechnic Chhabilhakhor Sadar Basti",
    ],
    "Bhimnagar (Sambhal)": [
        "Government Polytechnic Chandausi",
        "Swami Dayanand Saraswati Educational Institute",
    ],
    Bijnor: [
        "Government Polytechnic Bijnor Up",
        "Government Polytechnic Changipur (Chandpur) Bijnor",
        "Janta College of Pharmacy",
        "Janta College of Polytechnic",
        "K L S Institute of Engineering and Technology",
        "K L S Polytechnic College",
        "Krishna College of Pharmacy",
        "Krishna Institute",
        "Krishna Institute of Polytechnic",
        "North India Institute of Technology",
        "R V Institute of Technology",
        "Veer Kunwar Institute of Technology Bijnor",
        "Vivek College of Technical Education",
    ],
    Budaun: [
        "Government Polytechnic Budaun",
        "Government Polytechnic, Alapur, Budaun",
        "Hariram Satyanaraian Institute of Higher and Technical Education",
    ],
    Bulandshahar: [
        "Babu Banarsi Das Institute of Engineering Technology and Research Centre",
        "Billah College of Pharmacy",
        "Bulandshahr College Bulandshahr School of Pharmacy",
        "Government Polytechnic Debai Bulandshahr",
        "J. K. Institute of Pharmacy and Management",
        "Janta Polytechnic Jahangirabad",
        "Jk Institute of Pharmacy",
        "Marathwada Institute of Technology (Mit)",
        "Modern International College of Pharmacy",
        "Seth Ganga Sagar Jatia Polytechnic",
        "Shivam Technical Campus",
        "Viit Polytechnic College",
    ],
    Chandauli: [
        "Chandauli Polytechnic Chandauli",
        "Mahamaya Polytechnic of Information Technology",
        "Pt. Ram Adhar J. Tiwari College of Polytechnic",
        "Sant Ravidas Govt Polytechnic Chakiya Chandauli",
        "Shri Tridandideo Hanumat Technical College",
    ],
    Chitrakoot: [
        "Government Polytechnic, Manikpur",
        "Government Polytechnic Kalchinha Chitrakoot",
    ],
    Deoria: [
        "Government Polytechnic, Chariyaon Bujurg, Deoria",
        "Government Polytechnic, Deoria",
    ],
    Etah: ["Government Polytechnic Etah"],
    Etawah: [
        "Government Polytechnic Etawah",
        "Shri R. L. T. Institute of Pharmaceutical Science and Technology",
        "Sir Madanlal Institute of Pharmacy",
    ],
    Faizabad: [
        "Aryika Gyanmati Government Girls Polytechnic, Faizabad",
        "Bhavdiya Institute of Pharmaceutical Sciences and Research",
        "Government Polytechnic Faizabad",
        "Jhunjhunwala P. G. College Faculty of Engineering and Technology",
        "Urmila College of Technology @ Management",
    ],
    Farrukhabad: ["Government Polytechnic"],
    Fatehpur: [
        "Government Girls Polytechnic",
        "Government Polytechnic Fatehpur",
        "Thakur Yugraj Singh Polytechnic",
    ],
    Firozabad: [
        "Aadilabad Technical Institute",
        "Iklavya College of Pharmacy",
        "Rajkiya Polytechnic, Firozabad",
    ],
    "G. B. Nagar": [
        "Government Polytechnic, Firozabad",
        "Government Polytechnic, Noida",
        "Government Polytechnic, Phase – 2nd, Noida",
    ],
    Gonda: ["Government Polytechnic Gonda", "Government Polytechnic, Mankapur"],
    Gorakhpur: [
        "Dr. Bhim Rao Ambedkar Government Polytechnic, Gorakhpur",
        "G. D. Memorial College of Pharmacy",
        "Gautam Buddha Polytechnic Institute",
        "Government Girls Polytechnic Gorakhpur",
        "Indu Tech. Institute of Pharmacy",
        "Pt. Ram Lakhan Shukla Polytechnic Institute",
        "Pt. Satyadeo College of Pharmacy",
        "School of Pharmacy Ims",
        "Shiva Polytechnic",
        "Swami Vivekanand College of Pharmacy",
    ],
    Hamirpur: [
        "Gandhi Polytechnic",
        "Government Polytechnic, Hamirpur",
        "Hamirpur College of Engineering and Technology",
        "Hamirpur College of Pharmacy",
    ],
    Hardoi: [
        "A R Y College of Pharmacy",
        "Bhagwant Institute of Pharmacy",
        "Government Polytechnic Pihani Hardoi",
        "Government Polytechnic Shahabad",
        "Government Polytechnic Umraha Bilgram Hardoi",
        "Government Polytechnic, Sandila",
        "Government Polytechnic, Sandila, Hardoi",
        "Hardoi Institute of Pharmacy and Information Sciences",
        "Hardoi School of Pharmacy",
        "Madhusudan Institute of Pharmacy",
        "Polytechnic Chhachhemau Hardoi",
        "Sardar Patel Institute of Pharmacy",
        "Sardar Patel Institute of Pharmacy Kakori Road Kachhauna",
        "Shankar Bharthi Institute of Pharmacy",
        "Swami Kalyandeo Government Polytechnic",
        "Trident College of Pharmacy",
        "Trident Institute of Pharmacy",
        "V. R. Institute of Pharmacy",
    ],
    Hathras: [
        "Chhattrapati Shahuji Maharaj Polytechnic",
        "Government Polytechnic",
        "Hathras College of Pharmacy",
        "Jan Shikshan Sansthan",
        "Kishan Lal Institute of Pharmacy",
        "Rajkiya Polytechnic",
    ],
    Jaunpur: [
        "Dr. Bhim Rao Ambedkar Government Polytechnic, Kerakat",
        "Government Polytechnic Chandauli",
        "Government Polytechnic Jaunpur",
        "Vasant Rao Ambedkar Shikshan Sansthan",
    ],
    Jhansi: [
        "Bharat Institute of Technology",
        "Bharat Institute of Technology, Pharmacy",
        "G. S. R. M. Memorial College of Pharmacy",
        "Government Girls Polytechnic Jhansi",
        "Government Polytechnic",
        "Government Polytechnic Babina",
        "Government Polytechnic, Babina",
        "Government Polytechnic, Jhansi",
        "Lakshmibai National Institute of Physical Education",
        "Raja Balwant Singh College",
        "Raja Balwant Singh Institute of Pharmacy",
        "Raja Balwant Singh Institute of Technology",
        "Shivdan Singh Institute of Technology and Management",
        "Shivdan Singh Polytechnic",
        "Swami Vivekanand College of Pharmacy",
        "Vivekanand Polytechnic",
    ],
    "Jyotiba Phule Nagar": [
        "Abdul Kalam Institute of Pharmacy",
        "Azad Polytechnic",
        "Government Girls Polytechnic",
        "Government Polytechnic Chharra",
        "Government Polytechnic Chharra, Aligarh",
        "Government Polytechnic Manpur",
        "Government Polytechnic, Aligarh",
        "Satyadeo Singh Memorial College",
        "Vivekanand Polytechnic College",
    ],
    Kannauj: [
        "Government Polytechnic Kannauj",
        "Sri Ram Institute of Pharmacy and Management",
        "Sri Ram Institute of Technology",
        "Sri Sai Pharmacy College",
        "Vivekanand Polytechnic",
    ],
    "Kanpur Dehat": [
        "Ajitmal Polytechnic",
        "Aryavart Institute of Technology and Management",
        "Chhatrapati Shahu Ji Maharaj Polytechnic",
        "Government Polytechnic Akbarpur",
        "Government Polytechnic, Auraiya",
        "Sri Sai Polytechnic",
    ],
    "Kanpur Nagar": [
        "A. N. D. Polytechnic",
        "Abhinav Seva Sansthan",
        "Adarsh Polytechnic",
        "Aditya Polytechnic",
        "Ambition Institute of Polytechnic",
        "Asha Devi Polytechnic",
        "C. S. J. M. University Polytechnic",
        "Central Footwear Training Institute",
        "Chhattrapati Shahu Ji Maharaj Government Polytechnic",
        "Cooper Technical Institute",
        "Dayal Polytechnic College",
        "Dr. Bhimrao Ambedkar Polytechnic",
        "Dr. H. S. Gour University",
        "G. S. R. M. College of Polytechnic",
        "Government Central Textile Institute",
        "Government Polytechnic Kanpur",
        "Government Polytechnic, Kanpur",
        "H. B. Institute of Technology",
        "Harcourt Butler Technical University",
        "K. P. Engineering College",
        "Kakori Memorial Polytechnic",
        "Kanpur Institute of Technology",
        "Krishna Institute of Engineering and Technology",
        "Lakshmibai National Institute of Physical Education",
        "Mahaveer Institute of Technology and Management",
        "Mahila Polytechnic Kanpur",
        "National Polytechnic College",
        "Naraina College of Engineering",
        "Naraina Vidya Peeth Polytechnic College",
        "Rajkiya Polytechnic",
        "Rama Institute of Engineering and Technology",
        "Rama Polytechnic",
        "Rama University, Kanpur",
        "Rungta College of Engineering and Technology",
        "Rungta Polytechnic",
        "S. S. Memorial Polytechnic",
        "Saraswati College of Polytechnic",
        "Saraswati Institute of Engineering and Technology",
        "Shri Ram Polytechnic",
        "Subhash Institute of Technology",
        "Swami Dayanand Saraswati Educational Institute",
        "Tulsidas V. I. Polytechnic",
        "V. R. Institute of Pharmacy",
        "Vasant Rao Ambedkar Shikshan Sansthan",
        "Vishwavidyalaya Polytechnic College",
        "Yashoda Polytechnic",
    ],
    Kasganj: ["Government Polytechnic"],
    Kaushambi: ["Government Polytechnic"],
    Kushinagar: [
        "Government Polytechnic Kushinagar",
        "Pt. Ram Lakhan Shukla Polytechnic Institute",
    ],
    "Lakhimpur Kheri": [
        "Government Girls Polytechnic, Maigalganj, Lakhimpur Kheri",
        "Government Polytechnic Lakhimpur Kheri",
        "Himachal Institute of Pharmacy",
        "Krishna Polytechnic College",
        "Madan Polytechnic College",
        "S. S. R. Institute of Pharmacy",
    ],
    Lalitpur: ["Government Polytechnic Lalitpur"],
    Lucknow: [
        "Ambalika Institute of Management and Technology",
        "Ambika Institute of Engineering and Management",
        "Ambika Institute of Management and Technology",
        "Azad Institute of Engineering and Technology",
        "Azad Institute of Pharmacy",
        "Azad Polytechnic",
        "Banshidhar Mahavidyalaya",
        "Banshidhar Polytechnic",
        "Bharat Institute of Technology",
        "Central Footwear Training Institute",
        "Charan Institute of Technology",
        "Dayal Polytechnic",
        "Era Polytechnic",
        "G. S. R. M. College of Polytechnic",
        "G. S. R. M. Memorial College of Pharmacy",
        "G. S. R. M. Memorial College of Pharmacy and Technology",
        "Government Girls Polytechnic",
        "Government Polytechnic",
        "Government Polytechnic Lucknow",
        "Government Polytechnic Mohan Road",
        "Hindustan Institute of Technology",
        "Institute of Pharmacy",
        "Krishna Institute of Engineering and Technology",
        "Lakshmibai National Institute of Physical Education",
        "Lal Bahadur Shastri Polytechnic",
        "Lord Krishna Polytechnic",
        "Lucknow Institute of Pharmacy",
        "M. R. D. Polytechnic",
        "M. R. Polytechnic",
        "Mahadevi Institute of Technology",
        "Mahila Polytechnic",
        "Metropolitan Institute of Technology",
        "Nagaji Institute of Technology",
        "Nari Shiksha Niketan Polytechnic",
        "Netaji Subhash Chandra Bose Polytechnic",
        "Pragati Polytechnic",
        "Pratap Institute of Technology",
        "Pt. Ram Lakhan Shukla Polytechnic",
        "Pt. Ram Lakhan Shukla Technical College",
        "R. S. Institute of Technology",
        "R. S. Memorial College of Engineering and Technology",
        "R. S. Memorial College of Pharmacy",
        "Rama Institute of Technology",
        "Rama Polytechnic",
        "Rama University",
        "Rungta College of Engineering and Technology",
        "Rungta Polytechnic",
        "S. S. Memorial Polytechnic",
        "Saraswati Institute of Engineering and Technology",
        "Saraswati Institute of Pharmacy",
        "Shiva Polytechnic",
        "Shri Siddhi Vinayak Polytechnic",
        "Subhash Institute of Technology",
        "T. S. M. College",
        "Thakur Yugraj Singh Polytechnic",
        "U. P. Institute of Design",
        "V. R. Institute of Pharmacy",
        "Vasant Rao Ambedkar Shikshan Sansthan",
        "Vishwavidyalaya Polytechnic College",
        "Yashoda Polytechnic",
    ],
    Maharajganj: ["Government Polytechnic Maharajganj"],
    Mahoba: [
        "Government Polytechnic, Mahoba",
        "Swami Vivekanand College of Pharmacy",
        "Vivekanand Polytechnic",
    ],
    Mainpuri: [
        "Ch. Charan Singh Polytechnic",
        "Government Polytechnic",
        "Kailash Narayan Polytechnic",
        "Pandit Ram Lakhan Shukla Polytechnic Institute",
        "Pt. Ram Lakhan Shukla Polytechnic",
        "Rama Institute of Technology",
    ],
    Mathura: [
        "G. S. R. M. College of Polytechnic",
        "Government Polytechnic Mathura",
        "Raja Balwant Singh College",
        "Raja Balwant Singh Institute of Pharmacy",
        "Raja Balwant Singh Institute of Technology",
        "Vivekanand Polytechnic",
    ],
    Meerut: [
        "C. S. J. M. University Polytechnic",
        "Government Polytechnic Meerut",
        "Meerut Institute of Engineering and Technology",
        "Pt. Ram Lakhan Shukla Polytechnic",
        "Pt. Satyadeo College of Pharmacy",
        "School of Pharmacy Ims",
        "Swami Vivekanand College of Pharmacy",
    ],
    Mirzapur: [
        "Gautam Buddha Polytechnic Institute",
        "Government Polytechnic Mirzapur",
        "Rajkiya Polytechnic, Mirzapur",
    ],
    Moradabad: [
        "G. S. R. M. Memorial College of Pharmacy",
        "Gautam Buddha Polytechnic Institute",
        "Government Polytechnic Moradabad",
        "Indu Tech. Institute of Pharmacy",
        "Pt. Ram Lakhan Shukla Polytechnic",
        "School of Pharmacy Ims",
        "Swami Vivekanand College of Pharmacy",
    ],
    Muzaffarnagar: [
        "Bhagwant Institute of Pharmacy",
        "Government Polytechnic, Budhana",
    ],
    Pilibhit: [
        "A R Y College of Pharmacy",
        "Bhagwant Institute of Pharmacy",
        "Government Polytechnic Pihani Hardoi",
        "Government Polytechnic Shahabad",
        "Government Polytechnic Umraha Bilgram Hardoi",
        "Hardoi Institute of Pharmacy and Information Sciences",
        "Hardoi School of Pharmacy",
        "Madhusudan Institute of Pharmacy",
        "Polytechnic Chhachhemau Hardoi",
        "Sardar Patel Institute of Pharmacy",
        "Swami Kalyandeo Government Polytechnic",
        "Trident College of Pharmacy",
        "Trident Institute of Pharmacy",
        "V. R. Institute of Pharmacy",
    ],
    Prayagraj: [
        "Balwant Singh Institute of Technology",
        "Balwant Singh Polytechnic",
        "Chhatrapati Shahu Ji Maharaj Polytechnic",
        "Government Polytechnic Prayagraj",
        "Government Polytechnic, Prayagraj",
        "Rama Polytechnic",
        "Rama University",
        "Shivdan Singh Polytechnic",
        "Suresh Gyan Vihar University",
        "Vishwavidyalaya Polytechnic College",
        "Yashoda Polytechnic",
    ],
    Raebareli: [
        "A. N. D. Polytechnic",
        "Abhinav Seva Sansthan",
        "Adarsh Polytechnic",
        "Aditya Polytechnic",
        "Ambition Institute of Polytechnic",
        "C. S. J. M. University Polytechnic",
        "Central Footwear Training Institute",
        "Chhattrapati Shahu Ji Maharaj Government Polytechnic",
        "Cooper Technical Institute",
        "Dayal Polytechnic College",
        "Dr. Bhimrao Ambedkar Polytechnic",
        "Dr. H. S. Gour University",
        "Feroze Gandhi Polytechnic Raebareli",
        "Feroze Gandhi Institute Of Engineering And Technology",
        "G. S. R. M. College of Polytechnic",
        "Government Polytechnic Raebareli",
        "Government Polytechnic, Raebareli",
        "H. B. Institute of Technology",
        "Harcourt Butler Technical University",
        "K. P. Engineering College",
        "Kakori Memorial Polytechnic",
        "Kanpur Institute of Technology",
        "Krishna Institute of Engineering and Technology",
        "Lakshmibai National Institute of Physical Education",
        "Mahila Polytechnic Raebareli",
        "National Polytechnic College",
        "Naraina College of Engineering",
        "Naraina Vidya Peeth Polytechnic College",
        "Rajkiya Polytechnic",
        "Rama Institute of Engineering and Technology",
        "Rama Polytechnic",
        "Rama University",
        "Rungta College of Engineering and Technology",
        "Rungta Polytechnic",
        "S. S. Memorial Polytechnic",
        "Saraswati College of Polytechnic",
        "Saraswati Institute of Engineering and Technology",
        "Shri Ram Polytechnic",
        "Subhash Institute of Technology",
        "Swami Dayanand Saraswati Educational Institute",
        "Tulsidas V. I. Polytechnic",
        "V. R. Institute of Pharmacy",
        "Vasant Rao Ambedkar Shikshan Sansthan",
        "Vishwavidyalaya Polytechnic College",
        "Yashoda Polytechnic",
    ],
    Rampur: [
        "Azad Polytechnic",
        "Government Polytechnic Rampur",
        "Swami Vivekanand College of Pharmacy",
    ],
    Saharanpur: [
        "Abdul Kalam Institute of Pharmacy",
        "Azad Polytechnic",
        "Azad Polytechnic Saharanpur",
        "Government Polytechnic Saharanpur",
        "Satyadeo Singh Memorial College",
        "Swami Vivekanand College of Pharmacy",
        "Vivekanand Polytechnic College",
    ],
    "Sant Kabir Nagar": [
        "Chhattrapati Shahu Ji Maharaj Polytechnic",
        "Government Polytechnic",
        "Sardar Patel Institute of Pharmacy",
        "Sardar Patel Institute of Pharmacy Kakori Road Kachhauna",
        "Shankar Bharthi Institute of Pharmacy",
        "Swami Kalyandeo Government Polytechnic",
        "Trident College of Pharmacy",
        "V. R. Institute of Pharmacy",
    ],
    "Sant Ravidas Nagar (Bhadohi)": [
        "Government Polytechnic",
        "Government Polytechnic Bhadohi",
        "Swami Vivekanand College of Pharmacy",
    ],
    Shahjahanpur: [
        "Bhagwant Institute of Pharmacy",
        "Government Polytechnic Pihani Hardoi",
        "Government Polytechnic Shahabad",
        "Government Polytechnic Umraha Bilgram Hardoi",
        "Hardoi Institute of Pharmacy and Information Sciences",
        "Hardoi School of Pharmacy",
        "Madhusudan Institute of Pharmacy",
        "Polytechnic Chhachhemau Hardoi",
        "Sardar Patel Institute of Pharmacy",
        "Swami Kalyandeo Government Polytechnic",
        "Trident College of Pharmacy",
        "Trident Institute of Pharmacy",
        "V. R. Institute of Pharmacy",
    ],
    Shamli: [
        "A R Y College of Pharmacy",
        "Aryavart Institute of Technology and Management",
        "Chhatrapati Shahu Ji Maharaj Polytechnic",
        "Government Polytechnic Akbarpur",
        "Government Polytechnic, Auraiya",
        "Sri Sai Polytechnic",
    ],
    Shravasti: ["Government Polytechnic", "Government Polytechnic Mahoba"],
    Siddharthnagar: [
        "Government Polytechnic Siddharthnagar",
        "Raja Balwant Singh College",
        "Raja Balwant Singh Institute of Pharmacy",
        "Raja Balwant Singh Institute of Technology",
    ],
    Sitapur: [
        "A. R. T. Polytechnic",
        "Adarsh Polytechnic",
        "Aryavart Polytechnic",
        "Government Polytechnic Mahoba",
        "Swami Vivekanand College of Pharmacy",
        "Vivekanand Polytechnic",
    ],
    Sonbhadra: [
        "Ch. Charan Singh Polytechnic",
        "Government Polytechnic",
        "Kailash Narayan Polytechnic",
        "Pandit Ram Lakhan Shukla Polytechnic Institute",
        "Pt. Ram Lakhan Shukla Polytechnic",
        "Rama Institute of Technology",
    ],
    Sultanpur: [
        "Government Polytechnic Sultanpur",
        "Swami Vivekanand College of Pharmacy",
    ],
    Unnao: [
        "Government Polytechnic, Unnao",
        "Pt. Ram Lakhan Shukla Polytechnic Institute",
    ],
    Varanasi: [
        "A. N. D. Polytechnic",
        "Asha Devi Polytechnic",
        "Baba Vishwanath Institute of Technology",
        "Central Footwear Training Institute",
        "Chhattrapati Shahu Ji Maharaj Polytechnic",
        "Cooper Technical Institute",
        "Dayal Polytechnic College",
        "Dr. Bhimrao Ambedkar Polytechnic",
        "G. S. R. M. College of Polytechnic",
        "Government Polytechnic Varanasi",
        "Harcourt Butler Technical University",
        "Kakori Memorial Polytechnic",
        "Krishna Institute of Engineering and Technology",
        "Lakshmibai National Institute of Physical Education",
        "Mahila Polytechnic Varanasi",
        "Netaji Subhash Chandra Bose Polytechnic",
        "Pt. Ram Lakhan Shukla Polytechnic",
        "Pt. Ram Lakhan Shukla Technical College",
        "Rama Polytechnic",
        "Rama University",
        "Saraswati Institute of Engineering and Technology",
        "Shivdan Singh Polytechnic",
        "Subhash Institute of Technology",
        "Swami Dayanand Saraswati Educational Institute",
        "Tulsidas V. I. Polytechnic",
        "U. P. Institute of Design",
        "V. R. Institute of Pharmacy",
        "Vishwavidyalaya Polytechnic College",
        "Yashoda Polytechnic",
    ],
};
