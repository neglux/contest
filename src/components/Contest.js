import { StyledContest } from "./Contest.styled";

import { timeHandler } from "../handlers/timeHandler";
import { statusHandler } from "../handlers/statusHandler";

import { logos } from "../data/logos";

const Contest = (contest) => {
  const { name, url, site, startTime, endTime, isActive, isUpcoming } = contest;

  return (
    <StyledContest href={url} target="_blank">
      <img className="contest__site-logo" src={logos[site]} alt="logo" />
      <aside className="contest__content">
        <div className="contest__title">
          <h2 className="contest__name">{name}</h2>
          <span className="contest__state">
            {statusHandler(isActive, isUpcoming)}
          </span>
        </div>

        <div className="contest__duration">
          <span className="contest__time">
            <label>start</label>
            <span>{timeHandler(startTime)}</span>
          </span>
          <span className="contest__time">
            <label>end</label>
            <span>{timeHandler(endTime)}</span>
          </span>
        </div>
      </aside>
    </StyledContest>
  );
};

export default Contest;
