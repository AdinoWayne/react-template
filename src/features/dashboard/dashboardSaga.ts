// import cityApi from 'api/cityApi';
// import studentApi from 'api/studentApi';
// import { City, ListResponse, Student } from 'models';
// import { all, call, put, takeLatest } from "@redux-saga/core/effects";
// import { dashboardActions, RankingByCity } from "./dashboardSlice";

// function* fetchStatistics() {
//   const responseList: Array<ListResponse<Student>> = yield all([
//     call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male'}),
//     call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female'}),
//     call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8}),
//     call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5}),
//   ]);

//   const statisticList = responseList.map((x) => x.pagination._totalRows);
//   const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;
//   yield put(
//     dashboardActions.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount})
//   );
// }
// function* fetchHighestStudentList() {
//   const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
//     _page: 1,
//     _limit: 5,
//     _sort: 'mark',
//     _order: 'desc'
//   })
//   yield put(dashboardActions.setHighestStudentList(data))
// }
// function* fetchLowestStudentList() {
//   const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
//     _page: 1,
//     _limit: 5,
//     _sort: 'mark',
//     _order: 'asc'
//   })
//   yield put(dashboardActions.setLowestStudentList(data))
// }
// function* fetchRankingByCityList() {
//   // fetch city list
//   const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);
//   const callList = cityList.map((x) => 
//     call(studentApi.getAll, {
//       _page: 1, _limit: 5, _sort: 'mark', _order: 'desc', city: x.code
//     })
//   );
//   const responseList: Array<ListResponse<Student>> = yield all(callList);
//   const rankingByCityList: Array<RankingByCity> = responseList.map((x, idx) => ({
//     cityId: cityList[idx].code,
//     rankingList: x.data
//   }))
//   yield put(dashboardActions.setRankingByCityList(rankingByCityList))
// }

// function* fetchDashboardData() {
//   try {
//     yield all([
//       call(fetchStatistics),
//       call(fetchHighestStudentList),
//       call(fetchLowestStudentList),
//       call(fetchRankingByCityList),
//     ]);
//     yield put(dashboardActions.fetchDataSuccess());
//   } catch (error) {
//     console.log('failed to fetch dashboard data', error);
//     yield put(dashboardActions.fetchDataFailed());
//   }
// }

// export default function* dashboardSaga() {
//   yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData)
// }

const AlertDialog: any = 1;
export default AlertDialog;