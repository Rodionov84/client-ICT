import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getSumClaimsInGroup, getSumClaimsFromTheFilingDays, getSumClaimsFromTheFilingDaysOver,
  getSumClaimsResponsible, getSumClaimsFromTheFilingDaysForResponsible,
  getSumClaimsFromTheFilingDaysForResponsibleOver,
  getSumClaimsResponsibleAndStage, getSumClaimsFromTheFilingDaysForResponsibleAndStages,
  getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver, getSumClaimsFromTheFilingDaysOver1095,
  getSumClaimsFromTheFilingDaysForResponsibleOver1095, getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver1095
} from "../../../calculations/get-sum-claims";

import { periods } from "../../../imgs/period-icons";
import { TableHeaderGeneralList } from "../tableSkeleton/TableHeaderGeneralList";
import { TableFooterGeneral } from "../tableSkeleton/TableFooterGeneral";
import { StartPreloader } from "../../preloaders/StartPreloader";

export function GroupLevel(
  {
    claims,
    groups,
    setStateGroup,
    setStatePeriod,
    setStateResponsible,
    setStateStage,
    nestingViewGroupLevRes,
    setNestingViewGroupLevRes
  }
) {

  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const sortedGroups = groups ? [...groups] : null;

  function rowsAccordeon(string) {
    setNestingViewGroupLevRes(prev => {
      if (prev.includes(string)) {
        return prev.filter(str => str !== string)
      }
      return [...prev, string]
    })
  }

  function showCaimsGroups(group = null, period = null) {
    setStateGroup(group);
    setStatePeriod(period);
    navigate("/list-of-claims-groups");
  }

  function showCaims(group = null, responsible = null, period = null, stage = null) {
    setStateGroup(group);
    setStateResponsible(responsible);
    setStatePeriod(period);
    setStateStage(stage);
    navigate("/list-of-claims-gr-resp-stages");
  }

  function toggleRowsAccordeon(event, entity) {
    event.stopPropagation();
    rowsAccordeon(entity);
  }

  if (sortedGroups !== null) {
    return (
      <table>
        <TableHeaderGeneralList
          setSelectedPeriod={setSelectedPeriod}
          nameOfTableHeader="Группы - сотрудники - стадии: "
        />
        {sortedGroups
          .sort((a, b) => {
            if (selectedPeriod === null) {
              return getSumClaimsInGroup(b) - getSumClaimsInGroup(a);
            }
            else if (selectedPeriod === 21) {
              return getSumClaimsFromTheFilingDaysOver(b, 21) - getSumClaimsFromTheFilingDaysOver(a, 21);
            }
            else if (selectedPeriod === 1095) {
              return getSumClaimsFromTheFilingDaysOver1095(b) - getSumClaimsFromTheFilingDaysOver1095(a);
            }
            return getSumClaimsFromTheFilingDays(b, selectedPeriod) - getSumClaimsFromTheFilingDays(a, selectedPeriod);
          })
          .map((group) => {
            return (
              <tbody>
                <tr key={group.groupName} className="table-row-top-level">
                  <td onClick={(event) => { toggleRowsAccordeon(event, group.groupName) }}>
                    &nbsp;&nbsp;&nbsp;{group.groupName}
                  </td>
                  <td className="cells-with-numbers">
                    <span onClick={() => showCaimsGroups(group.groupName)}>
                      {getSumClaimsInGroup(group)}
                    </span>
                  </td>
                  {periods.map(period => <td className="cells-with-numbers">
                    <span onClick={() => showCaimsGroups(group.groupName, period.num)}>
                      {getSumClaimsFromTheFilingDays(group, period.num)}
                    </span>
                  </td>
                  )}
                  <td className="cells-with-numbers">
                    <span onClick={() => showCaimsGroups(group.groupName, 21)}>
                      {getSumClaimsFromTheFilingDaysOver(group, 20)}
                    </span>
                  </td>
                  <td className="cells-with-numbers">
                    <span onClick={() => showCaimsGroups(group.groupName, 1095)}>
                      {getSumClaimsFromTheFilingDaysOver1095(group)}
                    </span>
                  </td>
                </tr>
                {nestingViewGroupLevRes.includes(group.groupName)
                  && Object.keys(group.responsibles)
                    .sort((a, b) => {
                      if (selectedPeriod === null) {
                        return getSumClaimsResponsible(group, b) - getSumClaimsResponsible(group, a);
                      }
                      else if (selectedPeriod === 21) {
                        return getSumClaimsFromTheFilingDaysForResponsibleOver(group, 20, b) - getSumClaimsFromTheFilingDaysForResponsibleOver(group, 20, a);
                      }
                      else if (selectedPeriod === 1095) {
                        return getSumClaimsFromTheFilingDaysForResponsibleOver1095(group, b) - getSumClaimsFromTheFilingDaysForResponsibleOver1095(group, a);
                      }
                      return getSumClaimsFromTheFilingDaysForResponsible(group, selectedPeriod, b) - getSumClaimsFromTheFilingDaysForResponsible(group, selectedPeriod, a);
                    })
                    .map(responsible => {
                      return <>
                        <tr className="table-row-sub-level">
                          <td onClick={(event) => {
                            toggleRowsAccordeon(event, responsible);
                          }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{responsible}
                          </td>
                          <td className="cells-with-numbers">
                            <span onClick={() => showCaims(group.groupName, responsible)}>
                              {getSumClaimsResponsible(group, responsible)}
                            </span>
                          </td>
                          {periods.map(period => (
                            <td className="cells-with-numbers">
                              <span onClick={() => showCaims(group.groupName, responsible, period.num)}>
                                {getSumClaimsFromTheFilingDaysForResponsible(group, period.num, responsible)}
                              </span>
                            </td>))}
                          <td className="cells-with-numbers">
                            <span onClick={() => showCaims(group.groupName, responsible, 21)}>
                              {getSumClaimsFromTheFilingDaysForResponsibleOver(group, 20, responsible)}
                            </span>
                          </td>
                          <td className="cells-with-numbers">
                            <span onClick={() => showCaims(group.groupName, responsible, 1095)}>
                              {getSumClaimsFromTheFilingDaysForResponsibleOver1095(group, responsible)}
                            </span>
                          </td>
                        </tr>
                        {nestingViewGroupLevRes.includes(responsible)
                          && Object.keys(group.responsibles[responsible])
                            .sort((a, b) => {
                              if (selectedPeriod === null) {
                                return getSumClaimsResponsibleAndStage(group, responsible, b) - getSumClaimsResponsibleAndStage(group, responsible, a);
                              }
                              else if (selectedPeriod === 21) {
                                return getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver(group, 21, responsible, b) - getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver(group, 21, responsible, a);
                              }
                              else if (selectedPeriod === 1095) {
                                return getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver1095(group, responsible, b) - getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver1095(group, responsible, a);
                              }
                              return getSumClaimsFromTheFilingDaysForResponsibleAndStages(group, selectedPeriod, responsible, b) - getSumClaimsFromTheFilingDaysForResponsibleAndStages(group, selectedPeriod, responsible, a);
                            })
                            .map(stage => {
                              return <tr
                                className="table-row-sub-level"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  rowsAccordeon(stage);
                                }}
                              >
                                <td
                                  onClick={(event) => { toggleRowsAccordeon(event, stage) }}
                                  className="table-row-buttom-level">
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  {stage}
                                </td>
                                <td className="cells-with-numbers">
                                  <span onClick={() => showCaims(group.groupName, responsible, null, stage)}>
                                    {getSumClaimsResponsibleAndStage(group, responsible, stage)}
                                  </span>
                                </td>
                                {periods.map(period => (
                                  <td className="cells-with-numbers">
                                    <span onClick={() => showCaims(group.groupName, responsible, period.num, stage)}>
                                      {getSumClaimsFromTheFilingDaysForResponsibleAndStages(group, period.num, responsible, stage)}
                                    </span>
                                  </td>))}
                                <td className="cells-with-numbers">
                                  <span onClick={() => showCaims(group.groupName, responsible, 21, stage)}>
                                    {getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver(group, 20, responsible, stage)}
                                  </span>
                                </td>
                                <td className="cells-with-numbers">
                                  <span onClick={() => showCaims(group.groupName, responsible, 1095, stage)}>
                                    {getSumClaimsFromTheFilingDaysForResponsibleAndStagesOver1095(group, responsible, stage)}
                                  </span>
                                </td>
                              </tr>
                            })}
                      </>
                    })
                }
              </tbody>
            )
          })
        }
        <TableFooterGeneral claims={claims} setStatePeriod={setStatePeriod} />
      </table >
    )
  }
  return <StartPreloader />;
}
