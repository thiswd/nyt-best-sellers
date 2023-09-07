import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6"

import { ordinalNumber, weeksOnTheListLabel } from "../../../utils/bookInfos"
import {
  OrdinalSuffix,
  RankingContainer,
  RankingLabel,
  RankingLabelWrapper,
  WeeksOnList,
} from "./styles"

interface RankingInfoProps {
  rank: number
  rankLastWeek: number
  weeksOnTheList: number
}

export function RankingInfo({
  rank,
  rankLastWeek,
  weeksOnTheList,
}: RankingInfoProps) {
  const ordinalLabel = ordinalNumber(rank)
  const weeksLabel = weeksOnTheListLabel(weeksOnTheList)
  const rankDiff = rank - rankLastWeek

  function rankOscillationIcon() {
    if (rankDiff > 0) {
      return <FaArrowUpLong />
    }

    return <FaArrowDownLong />
  }

  return (
    <RankingContainer className="animate-ranking-container">
      <RankingLabelWrapper className="animate-ranking-wrapper">
        <RankingLabel className="animate-ranking-label">
          <span>{rank}</span>
          <OrdinalSuffix className="animate-ordinal-suffix">
            {ordinalLabel}
          </OrdinalSuffix>
        </RankingLabel>
        {rankDiff !== 0 && rankOscillationIcon()}
      </RankingLabelWrapper>
      <WeeksOnList className="animate-weeks-on-list">{weeksLabel}</WeeksOnList>
    </RankingContainer>
  )
}
