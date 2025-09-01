"use client";
// import from react
import { useEffect, useState } from "react";
// import github calendar
import GitHubCalendar from "react-github-calendar";
// import from mui
import { Tooltip as MuiTooltip } from "@mui/material";
// import components
import ContactIconLinks from "./contact-icon-links";

export default function GitHubContributionGrid() {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  useEffect(() => {
    const today = new Date().toISOString();
    const todayFormatted = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date());
    const oneYearAgo = new Date();
    const oneYearAgoPlusOneDay = new Date(oneYearAgo);
    oneYearAgoPlusOneDay.setDate(oneYearAgoPlusOneDay.getDate() - 1);
    const oneYearAgoPlusOneDayFormatted = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(oneYearAgoPlusOneDay);
    setDateRange({ start: oneYearAgoPlusOneDayFormatted, end: todayFormatted });
  }, []);

  return (
    <div className="p-4 mx-2">
      <h3 className="text-2xl 3xl:text-3xl font-bold text-center mb-6">
        GitHub Contributions
      </h3>
      <div className="w-full flex flex-col items-center contribution-shadow custom-scrollbar border-2 border-green-500 shadow-lg shadow-green-500/50 p-6 rounded-2xl">
        <div className="mb-6">
          <ContactIconLinks
            orientation="horizontal"
            include={["GitHub"]}
            size={36}
          />
        </div>
        <GitHubCalendar
          username="KLong75"
          blockSize={14}
          blockMargin={6}
          colorScheme="dark"
          fontSize={14}
          renderBlock={(block, activity) => (
            <MuiTooltip
              title={
                activity && typeof activity.count === "number" && activity.date
                  ? `${activity.count} ${
                      activity.count === 1 ? "contribution" : "contributions"
                    } on ${activity.date}`
                  : ""
              }
              slotProps={{
                tooltip: {
                  sx: {
                    color: "#000",
                    backgroundColor: "#e0e0e0",
                  },
                },
              }}>
              {block}
            </MuiTooltip>
          )}
        />
        <span className="text-sm italic mt-2">
          {dateRange.start} - {dateRange.end}
        </span>
      </div>
    </div>
  );
}
