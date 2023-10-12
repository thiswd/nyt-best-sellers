import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6"
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md"

import { formatDate } from "../../utils/formatDate"
import {
  ChoosePeriodContainer,
  ChoosePeriodWrapper,
  LegendItem,
  LegendUl,
  OtherListBtn,
  PublishedTime,
} from "./styles"
import { PublishedDatesType } from "../../types/bookTypes"

interface ChoosePeriodProps {
  publishedDates: PublishedDatesType
  setCurrentPublishedDate: (date: string) => void
}

export function ChoosePeriod({
  publishedDates: {
    publishedDate,
    nextPublishedDate,
    previousPublishedDate,
    updated,
  },
  setCurrentPublishedDate,
}: ChoosePeriodProps) {
  const mapUpdated: { [k: string]: string } = {
    weekly: "week",
    monthly: "month",
  }

  function handleClick(date: string) {
    date && setCurrentPublishedDate(date)
  }

  return (
    <ChoosePeriodContainer>
      <ChoosePeriodWrapper>
        <OtherListBtn onClick={() => handleClick(previousPublishedDate)}>
          <MdOutlineKeyboardArrowLeft />
        </OtherListBtn>
        <PublishedTime>{formatDate(publishedDate)}</PublishedTime>
        <OtherListBtn onClick={() => handleClick(nextPublishedDate)}>
          <MdOutlineKeyboardArrowRight />
        </OtherListBtn>
      </ChoosePeriodWrapper>

      <LegendUl>
        <LegendItem>
          <FaArrowUpLong />
          {updated && (
            <p>Up in rank since last {mapUpdated[updated.toLowerCase()]}</p>
          )}
        </LegendItem>
        <LegendItem>
          <FaArrowDownLong />
          {updated && (
            <p>Down in rank since last {mapUpdated[updated.toLowerCase()]}</p>
          )}
        </LegendItem>
      </LegendUl>
    </ChoosePeriodContainer>
  )
}
