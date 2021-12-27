import { SocialMediaIconsReact } from "social-media-icons-react";
export default function Main() {
  return (
    <div className="h-screen flex justify-center content-center font-sans">
      <div className="bg-white h-fit mt-24 max-w-screen-sm mx-2 relative rounded">
        <div className="relative shrink-0 min-h-96 bg-top bg-cover bg-no-repeat">
          <img
            className="rounded"
            src="https://about.me/cdn-cgi/image/q=40,dpr=2,f=auto,fit=cover,w=620,h=413.3333333333333,gravity=0.227x0.007/https://assets.about.me/background/users/g/a/n/gantulga.tsevegjav_1583298852_983.jpg"
            alt="profile"
          />
          <div className="absolute ml-8  text-center bottom-1">
            <p
              className="info text-white font-bold text-xl"
              style={{
                textShadow: "5, 5, 5",
              }}
            >
              GANTULGA TSEVEGJAV
            </p>
            <p className="info flex justify-center text-white drop-shadow-xl font-medium text-base">
              Software Engineer, Web Developer, and Director in Ulaanbaatar,
              Mongolia
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto max-w-sm m-5">
          <a
            href="https://mezorn.com/"
            className="flex justify-center items-center w-full text-white text-lg h-12 bg-[#4a4a4a] hover:bg-[#595959] rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="font-medium">Visit my company website</span>
          </a>
          <p className="mt-8">
            What’s up, I’m Gantulga. I’m a senior web developer living in
            Ulaanbaatar, Mongolia. I am a fan of technology, entrepreneurship,
            and design. I’m also interested in programming and education. You
            can visit my company website with a click on the button above.
          </p>
          <div>
            <ul className="flex justify-center space-x-5 mt-8">
              <li>
                <SocialMediaIconsReact
                  borderWidth="0"
                  roundness="50%"
                  icon="facebook"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#4a4a4a"
                  url="https://www.facebook.com/gantulga.tsevegjav"
                  size="40"
                />
              </li>
              <li>
                <SocialMediaIconsReact
                  borderWidth="0"
                  roundness="50%"
                  icon="instagram"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#4a4a4a"
                  url="https://www.instagram.com/gantulga.tse/"
                  size="40"
                />
              </li>
              <li>
                <SocialMediaIconsReact
                  borderWidth="0"
                  roundness="50%"
                  icon="twitter"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="#4a4a4a"
                  url="https://twitter.com/gantulga_tse"
                  size="40"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
