import { FaArrowUpLong } from "react-icons/fa6"
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

export function ChoosePeriod({
  publishedDate,
  nextPublishedDate,
  previousPublishedDate,
  setCurrentPublishedDate,
}) {
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
          <p>Up in rank since last week</p>
        </LegendItem>
        <LegendItem>
          <FaArrowUpLong />
          <p>Down in rank since last week</p>
        </LegendItem>
      </LegendUl>
    </ChoosePeriodContainer>
  )
}