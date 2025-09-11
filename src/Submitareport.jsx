import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ReportPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [landmark, setLandmark] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [recording, setRecording] = useState(false);
  const [informerName, setInformerName] = useState("");
  const [informerPhone, setInformerPhone] = useState("");
  const [informerEmail, setInformerEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lastReport, setLastReport] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);



  // Auto-detect location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setLocation(data.display_name || `${latitude}, ${longitude}`);
          setLatitude(latitude);
          setLongitude(longitude);
        } catch (err) {
          setLocation(`${latitude}, ${longitude}`);
          setLatitude(latitude);
          setLongitude(longitude);
        }
      });
    }
  }, []);

  // districts map (expanded from user-provided data)
  const districtsByState = {
"Andhra Pradesh": ["Anakapalli","Anantapur","Annamayya","Bapatla","Chittoor","East Godavari","Eluru","Guntur","Kakinada","Konaseema","Krishna","Kurnool","Nandyal","NTR","Palnadu","Prakasam","Sri Potti Sriramulu Nellore","Sri Sathya Sai","Srikakulam","Tirupati","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"],
"Arunachal Pradesh": ["Anjaw","Changlang","East Kameng","East Siang","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke-Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang"],
"Assam": ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
"Bihar": ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
"Chhattisgarh": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurela-Pendra-Marwahi","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
"Goa": ["North Goa","South Goa"],
"Gujarat": ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],
"Haryana": ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
"Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
"Jharkhand": ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"],
"Karnataka": ["Bagalkot","Ballari","Belagavi","Bengaluru Rural","Bengaluru Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Udupi","Uttara Kannada","Vijayapura","Yadgir","Vijayanagara"],
"Kerala": ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
"Madhya Pradesh": ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Narmadapuram","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Niwari","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
"Maharashtra": ["Ahmednagar","Akola","Amravati","Chhatrapati Sambhajinagar","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nanded","Nandurbar","Nashik","Dharashiv","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal","Nagpur"],
"Manipur": ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],
"Meghalaya": ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri-Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills","Eastern West Khasi Hills"],
"Mizoram": ["Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Saitual","Serchhip"],
"Nagaland": ["Chümoukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Niuland","Noklak","Peren","Phek","Shamator","Tseminyu","Tuensang","Wokha","Zunheboto"],
"Odisha": ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundargarh"],
"Punjab": ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Pathankot","Patiala","Rupnagar","Mohali","Sangrur","Nawanshahr","Sri Muktsar Sahib","Tarn Taran","Malerkotla"],
"Rajasthan": ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"],
"Sikkim": ["East Sikkim","North Sikkim","South Sikkim","West Sikkim","Pakyong","Soreng"],
"Tamil Nadu": ["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],
"Telangana": ["Adilabad","Bhadradri Kothagudem","Hanumakonda","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalapally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal-Malkajgiri","Mulugu","Nagarkurnool","Nalgonda","Narayanpet","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal","Yadadri Bhuvanagiri"],
"Tripura": ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
"Uttar Pradesh": ["Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Prayagraj","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
"Uttarakhand": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],
"West Bengal": ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"],
// ✅ Union Territories
"Andaman and Nicobar Islands": ["Nicobar","North and Middle Andaman","South Andaman"],
"Chandigarh": ["Chandigarh"],
"Dadra and Nagar Haveli and Daman and Diu": ["Dadra and Nagar Haveli","Daman","Diu"],
"Delhi": ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],
"Jammu and Kashmir": ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
"Ladakh": ["Kargil","Leh"],
"Lakshadweep": ["Agatti","Amini","Andrott","Bitra","Chetlat","Kadmat","Kalpeni","Kavaratti","Kiltan","Minicoy"],
"Puducherry": ["Karaikal"]
}

  const [stateName, setStateName] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [problem, setProblem] = useState('');
  const [problemOther, setProblemOther] = useState('');

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Handle video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setVideo(file);
  };

  // Voice recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioURL(URL.createObjectURL(blob));
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert("Microphone access denied or not supported.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  // Submit handler
  const handleSubmit = (e) => {
      e.preventDefault();
  if (!/^\d{10}$/.test(informerPhone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }
  if (!/^\d{6}$/.test(pincode)) {
    alert("Please enter a valid 6-digit pincode.");
    return;
  }
  setIsSubmitting(true);
  setTimeout(() => setIsSubmitting(false), 1000);
  
    e.preventDefault();
    // prepare preview URLs for images/video
    const imagePreviews = images && images.length ? images.map((f) => URL.createObjectURL(f)) : [];
    const videoPreview = video ? URL.createObjectURL(video) : null;

    const reportData = {
      id: `r_${Date.now()}`,
  title,
      description,
      location,
      landmark,
      latitude,
      longitude,
  state: stateName,
  district,
  pincode,
  problem: problem === 'Other' ? problemOther : problem,
      images: imagePreviews,
      video: videoPreview,
      audioURL,
      informerName,
      informerPhone,
      informerEmail,
      createdAt: new Date().toISOString(),
    };
    console.log("Report Submitted:", reportData);

    // persist to localStorage (keep history)
    try {
      const existing = JSON.parse(localStorage.getItem('janSetu_reports') || '[]');
      existing.unshift(reportData);
      localStorage.setItem('janSetu_reports', JSON.stringify(existing));
    } catch (err) {
      console.warn('Failed to persist report', err);
    }

  // keep a copy in local state so preview shows the submitted data
  setLastReport(reportData);

    // Reset form
    setTitle("");
    setDescription("");
    setLocation("");
    setLandmark("");
    setImages([]);
    setVideo(null);
    setAudioURL(null);
    setInformerName("");
    setInformerPhone("");
    setInformerEmail("");

    // Show success message
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-4 animate-bounce">
            ✅ Report Submitted Successfully!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for reporting. You can track your report in the{" "}
            <strong>Track Reports</strong> section.
          </p>
          <Link to="/trackmyreport" className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition" >
            Track Your Report
          </Link>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition"
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-4 drop-shadow">
          📝 Submit a Report
        </h2>
        <p className="text-sm text-gray-600 mb-3">Follow the steps to file a precise report — photos, location and clear description help teams act faster.</p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => document.getElementById('submit-instructions')?.classList.remove('hidden')}
            className="inline-flex items-center gap-2 bg-white border border-sky-200 text-sky-700 px-4 py-2 rounded-full shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v6"/><path d="M12 16v6"/><circle cx="12" cy="12" r="9"/></svg>
            How to submit
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-2xl space-y-8 border border-gray-100"
      >
        {/* Instructions Modal (hidden by default) */}
  <div id="submit-instructions" className="fixed inset-0 z-50 hidden items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-lg p-6 border">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">How to submit an effective report</h3>
              <button onClick={() => document.getElementById('submit-instructions')?.classList.add('hidden')} className="text-gray-400">✖</button>
            </div>
            <ol className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="font-semibold text-sky-600">1.</span>
                <div>
                  <div>Title: write a short descriptive title — e.g., "Pothole near Market Road".</div>
                  <div className="text-gray-600 mt-1">शीर्षक: एक छोटा वर्णनात्मक शीर्षक लिखें — जैसे, "मार्केट रोड के पास गड्ढा"।</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="font-semibold text-sky-600">2.</span>
                <div>
                  <div>Description: include details, severity and any hazards (time, obstruction).</div>
                  <div className="text-gray-600 mt-1">विवरण: विवरण शामिल करें, गंभीरता और किसी भी खतरे (समय, बाधा) का उल्लेख करें।</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="font-semibold text-sky-600">3.</span>
                <div>
                  <div>Location: use auto-detected address or paste GPS coordinates for exact placement.</div>
                  <div className="text-gray-600 mt-1">स्थान: ऑटो-डिटेक्टेड पता उपयोग करें या सटीक स्थान के लिए जीपीएस निर्देशांक पेस्ट करें।</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="font-semibold text-sky-600">4.</span>
                <div>
                  <div>Photos & Video: add clear images from multiple angles; videos help show active hazards.</div>
                  <div className="text-gray-600 mt-1">फ़ोटो और वीडियो: कई कोणों से स्पष्ट तस्वीरें जोड़ें; वीडियो सक्रिय खतरों को दिखाने में मदद करता है।</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="font-semibold text-sky-600">5.</span>
                <div>
                  <div>Voice note (optional): describe the situation if typing isn't convenient.</div>
                  <div className="text-gray-600 mt-1">वॉइस नोट (वैकल्पिक): यदि टाइप करना सुविधाजनक नहीं है, तो स्थिति का वर्णन करें।</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="font-semibold text-sky-600">6.</span>
                <div>
                  <div>Tags/Landmark: add a nearby landmark to help field teams find the spot.</div>
                  <div className="text-gray-600 mt-1">टैग/लैंडमार्क: नज़दीकी लैंडमार्क जोड़ें ताकि फील्ड टीम को जगह ढूँढने में आसानी हो।</div>
                </div>
              </li>
            </ol>
            <div className="mt-5 text-right">
              <button onClick={() => document.getElementById('submit-instructions')?.classList.add('hidden')} className="px-4 py-2 bg-sky-600 text-white rounded-lg">Got it</button>
            </div>
          </div>
        </div>
        {/* Problem selection (replaces Title) */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Problem selection</label>
          <div className="relative">
            <select 
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
            >
              <option value="">Choose a problem</option>
              <option value="Pothole">Pothole</option>
              <option value="Water leakage">Water leakage</option>
              <option value="Streetlight not working">Streetlight not working</option>
              <option value="Garbage overflow">Garbage overflow</option>
              <option value="Tree obstruction">Tree fallen / obstruction</option>
              <option value="Road damage">Road damage</option>
              <option value="Sewage / Drainage">Sewage / Drainage issue</option>
              <option value="Encroachment">Encroachment</option>
              <option value="Illegal dumping">Illegal dumping</option>
              <option value="Traffic signal issue">Traffic signal issue</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {problem === 'Other' && (
            <input
              type="text"
              className="mt-3 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Describe the problem"
              value={problemOther}
              onChange={(e) => setProblemOther(e.target.value)}
              required
            />
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Description
          </label>
          <textarea
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="4"
            placeholder="Describe the issue clearly..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Street Address
          </label>
          <input required
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none mb-4"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label className="block font-semibold mb-2 text-gray-700">
            Landmark
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Nearby landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>

        {/* State / District / Pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">State</label>
            <select required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" value={stateName} onChange={(e)=>{setStateName(e.target.value); setDistrict('');}}>
              <option value="">Select state</option>
              {Object.keys(districtsByState).map((s)=> (<option key={s} value={s}>{s}</option>))}
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">District</label>
            {stateName && districtsByState[stateName] ? (
              <select required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" value={district} onChange={(e)=>setDistrict(e.target.value)}>
                <option value="">Select district</option>
                {districtsByState[stateName].map(d=> <option key={d} value={d}>{d}</option>)}
              </select>
            ) : (
              <input required className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" value={district} onChange={(e)=>setDistrict(e.target.value)} placeholder="Enter district" />
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Pincode</label>
            <input required type="text" inputMode="numeric" pattern="[0-9]*" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="e.g. 560001" />
          </div>
        </div>

        {/* Informer Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Informer Name</label>
            <input required
              type="text"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Your name"
              value={informerName}
              onChange={(e) => setInformerName(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Contact Number</label>
            <input required
              type="tel"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Phone number"
              value={informerPhone}
              onChange={(e) => setInformerPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Email</label>
            <input required
              type="email"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Email address"
              value={informerEmail}
              onChange={(e) => setInformerEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-4 text-gray-700">
            Upload Images
          </label>
          <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 transition cursor-pointer">
            <input required
              type="file"
              accept="image/*"
              multiple
              id="image-upload"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <i className="ri-image-add-line text-6xl text-blue-500 mb-3"></i>
              <span className="font-medium">Drag & Drop images here</span>
              <span className="text-sm">or click to browse</span>
            </label>
          </div>
          {images.length > 0 && (
            <div className="flex gap-3 flex-wrap mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-28 h-28 object-cover rounded-xl shadow-md border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Video Upload */}
        <div>
          <label className="block font-semibold mb-4 text-gray-700">
            Upload Video
          </label>
          <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 transition cursor-pointer">
            <input
              type="file"
              accept="video/*"
              id="video-upload"
              onChange={handleVideoUpload}
              className="hidden"
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <i className="ri-video-add-line text-6xl text-blue-500 mb-3"></i>
              <span className="font-medium">Drag & Drop video here</span>
              <span className="text-sm">or click to browse</span>
            </label>
          </div>
          {video && (
            <video
              src={URL.createObjectURL(video)}
              controls
              className="mt-4 w-full rounded-xl shadow-md border"
            />
          )}
        </div>

        {/* Voice Recording */}
        <div>
          <label className="block font-semibold mb-4 text-gray-700">
            Voice Note
          </label>
          {!recording ? (
            <button
              type="button"
              onClick={startRecording}
              className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-red-700 hover:scale-105 transition"
            >
              <i className="ri-mic-fill text-lg"></i> Start Recording
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-800 hover:scale-105 transition"
            >
              ⏹ Stop Recording
            </button>
          )}
          {audioURL && (
            <audio controls src={audioURL} className="mt-4 w-full"></audio>
          )}
        </div>

        {/* Submit Button */}
       <button
  type="submit"
  disabled={isSubmitting}
  className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition
    ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105"}`}
>
  {isSubmitting ? "Submitting..." : "🚀 Submit Report"}
</button>
      </form>
      {/* Show most recent submitted report (from local state or storage) */}

    </div>
  );
}
