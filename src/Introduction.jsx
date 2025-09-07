function Introduction() {
  return (
    <div className="intro-container flex flex-col items-center ">
      <h2 className="intro-title text-4xl">🌍 Introduction to Civic Sense</h2>
      <video className="h-screen" controls src="video.mp4"></video>

       <style>
        {`
          .intro-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, #f0f4ff, #ffffff);
            min-height: 100vh;
          }

          .intro-title {
            font-size: 2.2rem;
            margin-bottom: 20px;
            color: #222;
            font-weight: 700;
            background: linear-gradient(90deg, #0077ff, #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .intro-card {
            background: #fff;
            border-radius: 20px;
            padding: 16px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            max-width: 900px;
            width: 100%;
          }

          .intro-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 28px rgba(0,0,0,0.15);
          }

          .intro-video {
            width: 100%;
            height: auto;
            border-radius: 16px;
            outline: none;
          }
        `}
      </style>
    </div>
  );
}

export default Introduction;
