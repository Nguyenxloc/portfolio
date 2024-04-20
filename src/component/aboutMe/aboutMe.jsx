import React from "react";

export default function AboutMe() {
  const data =[
    {img:"https://private-user-images.githubusercontent.com/86769202/271763925-f59a0725-0a68-46ca-bbd6-343640fcbf48.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1NTkzNjksIm5iZiI6MTcxMzU1OTA2OSwicGF0aCI6Ii84Njc2OTIwMi8yNzE3NjM5MjUtZjU5YTA3MjUtMGE2OC00NmNhLWJiZDYtMzQzNjQwZmNiZjQ4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE5VDIwMzc0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY2NGI3OTFlODA2MTRjMDhhM2ZjNjE4ZTAwNTk2NGYyMGZkY2ZkYjk4YmRmZmI3MWRmYTAyNDczZTAwNjMwMDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4TuJpF--buBvPnPS-3_wOxqQ6tgvWngN1wAKxuqMwF8",
     content:"An application supported to both window and mac to help owner of coffee shop run bussiness smooth. That application act like an cash register to avoid lost money. "},
     {
      img:"https://private-user-images.githubusercontent.com/86769202/271763925-f59a0725-0a68-46ca-bbd6-343640fcbf48.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1NTkzNjksIm5iZiI6MTcxMzU1OTA2OSwicGF0aCI6Ii84Njc2OTIwMi8yNzE3NjM5MjUtZjU5YTA3MjUtMGE2OC00NmNhLWJiZDYtMzQzNjQwZmNiZjQ4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE5VDIwMzc0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY2NGI3OTFlODA2MTRjMDhhM2ZjNjE4ZTAwNTk2NGYyMGZkY2ZkYjk4YmRmZmI3MWRmYTAyNDczZTAwNjMwMDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4TuJpF--buBvPnPS-3_wOxqQ6tgvWngN1wAKxuqMwF8",
      content:"Recover the legendary game made. this game is written by reactJS, is deployed on github page and use google cloud to store score of player.Click link below to let get fun."
     }
  ]
  return (
    <div>
      <div className="flex">
        <div className="w-4/12">
          <img
            className="rounded-lg"
            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/306316719_5207478342714818_7984495956455627093_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFP_e9aP-UhSOaP8e9ciINhKXODY68QpWMpc4NjrxClY1EtE06qn1Y3_dQsLF0r0CL1dqhuAu5E1xcV9KHNbnAZ&_nc_ohc=tUs1b8I6G-MAb66XalX&_nc_ht=scontent.fhan5-11.fna&oh=00_AfAoTv32gYrYq7Rm4wNbcRjlZXn_OsrqHsvzOLN_EiGBEA&oe=6621D7F2"
            alt=""
          />
        </div>
        <div className="text-start">
          I’m looking for a job on IT field. I’m enjoy making anything efficient
          and simple and simple for development. I also spend time learning new
          technologies and best practices to become a better engineer. Please
          take a look my work below to know how can i do. Thank you !
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-start font-bold">My project</h2>
          {data.map((ele)=>{
            return(
              <div className="flex mb-5">
              <img
                className="w-6/12"
                src={ele.img}
                alt=""
              />
              <p className="text-start">
                {ele.content}
              </p>
            </div>   
            )
          })
          }
        </div>
      </div>
      <div>
        <h2 className="text-start font-bold">Education</h2>
        <div className="mb-4"> 
          <h2 className="text-start font-bold">National academy of Public administration</h2>
          <p className="text-start">Bachelor of public management</p>
        </div>
        <div>
          <h2 className="text-start font-bold">FPT Polytechnic college</h2>
          <p className="text-start">Software development-java technologies</p>
        </div>
      </div>
    </div>
  );
}
