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
import { IconType } from "react-icons"

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

  const legendItems: { direction: "Up" | "Down"; icon: IconType }[] = [
    { direction: "Up", icon: FaArrowUpLong },
    { direction: "Down", icon: FaArrowDownLong },
  ]

  function handleClick(date: string) {
    date && setCurrentPublishedDate(date)
  }

  function NavigationArrow({
    direction,
    date,
  }: {
    direction: "left" | "right"
    date: string
  }) {
    const Icon =
      direction === "left"
        ? MdOutlineKeyboardArrowLeft
        : MdOutlineKeyboardArrowRight
    return (
      <OtherListBtn onClick={() => handleClick(date)}>
        <Icon />
      </OtherListBtn>
    )
  }

  return (
    <ChoosePeriodContainer>
      <ChoosePeriodWrapper>
        <NavigationArrow direction="left" date={previousPublishedDate} />
        <PublishedTime>{formatDate(publishedDate)}</PublishedTime>
        <NavigationArrow direction="right" date={nextPublishedDate} />
      </ChoosePeriodWrapper>

      <LegendUl>
        {updated &&
          legendItems.map(({ direction, icon: ArrowIcon }) => (
            <LegendItem key={direction}>
              <ArrowIcon />
              <p>
                {direction} in rank since last{" "}
                {mapUpdated[updated.toLowerCase()]}
              </p>
            </LegendItem>
          ))}
      </LegendUl>
    </ChoosePeriodContainer>
  )
}
