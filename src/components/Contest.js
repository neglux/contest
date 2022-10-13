import React from "react";
import { StyledContest } from "./styles/Contest.styled";

const Contest = (contest) => {
  const { name, url, site } = contest;
  const startTime = contest["start_time"];
  const endTime = contest["end_time"];

  const timeFormatOptions = {
    dateStyle: "full",
  };
  const logos = {
    HackerRank:
      "https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_cursor_favicon_480px-150x150.png",
    LeetCode:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    "Kick Start":
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    CodeForces:
      "https://codeforces.org/s/72616/images/codeforces-sponsored-by-ton.png",
    HackerEarth:
      "https://static-fastly.hackerearth.com/newton/static/images/he-header-logo.svg",
    AtCoder: "https://img.atcoder.jp/assets/atcoder.png",
    CodeChef: "https://cdn.codechef.com/images/cc-logo.svg",
  };

  return (
    <StyledContest href={url} target="_blank">
      <img className="contest__site-logo" src={logos[site]} alt="logo" />
      <aside className="contest__content">
        <h2 className="contest__name">{name}</h2>
        <div className="contest__duration">
          <span className="contest__time">
            <label>start</label>
            <span>
              {new Intl.DateTimeFormat("en-US", timeFormatOptions).format(
                new Date(startTime)
              )}
            </span>
          </span>
          <span className="contest__time">
            <label>end</label>
            <span>
              {new Intl.DateTimeFormat("en-US", timeFormatOptions).format(
                new Date(endTime)
              )}
            </span>
          </span>
        </div>
      </aside>
    </StyledContest>
  );
};

export default Contest;
