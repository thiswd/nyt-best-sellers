import { ordinalNumber, weeksOnTheListLabel } from "../../../utils/bookInfos"
import {
  OrdinalSuffix,
  RankingContainer,
  RankingLabel,
  WeeksOnList,
} from "./styles"

interface RankingInfoProps {
  rank: number
  weeksOnTheList: number
}

export function RankingInfo({ rank, weeksOnTheList }: RankingInfoProps) {
  const ordinalLabel = ordinalNumber(rank)
  const weeksLabel = weeksOnTheListLabel(weeksOnTheList)

  return (
    <RankingContainer className="animate-ranking-container">
      <RankingLabel className="animate-ranking-label">
        <span>{rank}</span>
        <OrdinalSuffix className="animate-ordinal-suffix">
          {ordinalLabel}
        </OrdinalSuffix>
      </RankingLabel>
      <WeeksOnList className="animate-weeks-on-list">{weeksLabel}</WeeksOnList>
    </RankingContainer>
  )
}
