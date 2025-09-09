import React, { useEffect, useState } from 'react'

function ReportCard({report}){
  if(!report) return null;
  const { title, description, location, landmark, images, video, audioURL, informerName, informerEmail, informerPhone, latitude, longitude, createdAt } = report;
  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{title || 'Report'}</h2>
      {description ? <p className="text-sm text-gray-700 mb-2">{description}</p> : null}

      <div className="text-sm text-gray-600 mb-2">
        {location ? <div><strong>Location:</strong> {location}</div> : null}
        {landmark ? <div><strong>Landmark:</strong> {landmark}</div> : null}
      </div>

      {images ? (
        Array.isArray(images) ? (
          <div className="grid grid-cols-2 gap-2 mb-3">
            {images.map((src, i) => (
              <img key={i} src={src} alt={`report-${i}`} className="w-full h-32 object-cover rounded" />
            ))}
          </div>
        ) : (
          <img src={images} alt="report" className="w-full h-48 object-cover rounded mb-3" />
        )
      ) : null}

      {video ? (
        <video src={video} controls className="w-full mb-3 rounded" />
      ) : null}

      {audioURL ? (
        <audio src={audioURL} controls className="w-full mb-3" />
      ) : null}

      <div className="text-sm text-gray-700">
        <div><strong>Informer:</strong> {informerName || 'Anonymous'}</div>
        {informerEmail ? <div><strong>Email:</strong> {informerEmail}</div> : null}
        {informerPhone ? <div><strong>Phone:</strong> {informerPhone}</div> : null}
        {latitude && longitude ? (
          <div className="mt-2 text-xs text-gray-500">Lat: {typeof latitude === 'number' ? latitude.toFixed(6) : latitude}, Lon: {typeof longitude === 'number' ? longitude.toFixed(6) : longitude}</div>
        ) : null}
        {createdAt ? <div className="mt-1 text-xs text-gray-400">Submitted: {new Date(createdAt).toLocaleString()}</div> : null}
      </div>
    </div>
  )
}

export default function Trackmyreport(props){
  // if a single report is passed as props (from Submit page), render it
  const hasProps = props && Object.keys(props).length > 0 && (props.title || props.description || props.latitude);
  const [reports, setReports] = useState([]);

  useEffect(()=>{
    try{
      const saved = JSON.parse(localStorage.getItem('janSetu_reports') || '[]');
      setReports(saved);
    }catch(e){
      setReports([]);
    }
  }, []);

  if(hasProps){
    // construct a single report object from props
    const r = { ...props };
    return <ReportCard report={r} />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Track Reports</h1>
      {reports.length === 0 ? (
        <div className="text-sm text-gray-600">No reports found. Submit a report to see it here.</div>
      ) : (
        <div className="space-y-4">
          {reports.map((rep)=> (
            <ReportCard key={rep.id || rep.createdAt} report={rep} />
          ))}
        </div>
      )}
    </div>
  )
}
