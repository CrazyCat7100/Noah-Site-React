import React from "react";
import Button from "./Button";

const Videography = () => {
  return (
    <div>
      <h2 id="links">
        <b>Videography</b>
      </h2>
      <p>
        Occasionally, I like to make videos. I record my musical talents, events
        I attend, and upload recording from games I've played and made. Find me
        on YouTube!
      </p>
      <Button text="Guitar Videos" link="https://www.youtube.com/channel/UCN35Quf5BxjZ-qkXhqAUWBg/videos" />
      <Button text="Motorcycle Videos" link="https://www.youtube.com/channel/UCCGh3tU2Tb-4C5f_2NJpzSg" />
      <Button text="Personal Channel with everything else" link="https://www.youtube.com/channel/UC_0bvdhEcOqaoPcoSlTHifA" />
        
    </div>
  );
};

export default Videography;
