import axios from 'axios'
// import t from '@/assets/t.json'
import rc from '@/assets/rateChart.json'

// export const searchType = async ({ commit }, data) => {
//     const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//     const result = await axios.get(baseURL + data)
//     commit('SEARCH__RESULT', result.data)
// }

export const rateChartGet = ({commit}) => {
  // console.log(rc);
  commit('RATE__CHART__INIT', rc)
}



// export const searchAll = async ({ commit }) => {    /*全部都沒有選擇直接搜尋*/ 
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL)
//   commit('SEARCH__RESULT', result.data)
// }

// export const searchRegion = async ({ commit }, data) => {   /*只搜尋地區*/ 
//   const params = {
//     region : data /*region修改成後端地區命名*/
//   }
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }

// export const searchHospital = async ({ commit }, data) => {   /*只搜尋醫院*/
//   const params = {
//     hospital : data /*hospital修改成後端醫院命名*/
//   }
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }

// export const searchDoctor = async ({ commit }, data) => {   /*只搜尋科別 */
//   const params = {
//     doctor : data /*doctor修改成後端科別命名*/
//   }
//   console.log(params);
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }

// export const searchRate = async ({ commit }, data) => {   /*只搜尋評分 */
//   const params = {
//     minrate : Number(data[0]), /*minrate修改成後端最小值命名*/
//     maxrate : Number(data[1]) /*minrate修改成後端最大值命名*/
//   }
//   console.log(params);
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }

// export const searchRegion_Hospital = async ({ commit }, data) => {  /*搜尋指定地區的醫院無特定評分 */
//   const params = {
//     region : data[0], /*region修改成後端地區命名*/
//     hospital : data[1] /*hospital修改成後端醫院命名*/
//   }
//   console.log(params);
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }

// export const searchRegion_Doctor = async ({ commit }, data) => {    /*搜尋指定地區的醫生無特定評分 */
//   const params = {
//     region : data[0], /*region修改成後端地區命名*/
//     doctor : data[1] /*doctor修改成後端科別命名*/
//   }
//   console.log(params);
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }


// export const searchRegion_Doctor_Rate = async ({ commit }, data) => {   /*搜尋指定地區的醫生特定評分 */
//   const params = {
//     region : data[0], /*region修改成後端地區命名*/
//     doctor : data[1], /*doctor修改成後端科別命名*/
//     minrate: Number(data[2]),/*minrate修改成後端最小值命名*/
//     maxrate: Number(data[3]) /*maxrate修改成後端最大值命名*/
//   }
//   console.log(params);
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }



// export const searchRegion_Rate = async ({ commit }, data) => {    /*搜尋特定區域的特定評分 */
//   const params = {
//     region : data[0],   /*region修改成後端地區命名*/
//     minrate : Number(data[1]),  /*minrate修改成後端最小值命名*/
//     maxrate : Number(data[2])   /*maxrate修改成後端最大值命名*/
//   }
//   console.log(params);
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }


// export const searchRegion_Hosptial_Doctor_Rate = async ({ commit }, data) =>{   /*全部都選擇的搜尋 */
//   const params = {
//     region: data[0],    /*region修改成後端地區命名*/
//     hospital : data[1],    /*hospital修改成後端醫院命名*/
//     doctor : data[2],     /*doctor修改成後端科別命名*/
//     minrate : Number(data[3]),   /*minrate修改成後端最小值命名*/
//     maxrate: Number(data[4])    /*maxrate修改成後端最大值命名*/
//   }
//   console.log(params);
//   const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
//   const result = await axios.get(baseURL, { params })
//   commit('SEARCH__RESULT', result.data)
// }

/*export const searchDistance = async ({ commit }, data) => {
  const params = {
    distance : Number(data)
  }
  console.log(params);
  const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
  const result = await axios.get(baseURL, { params })
  commit('SEARCH__RESULT', result.data)
}*/


export const messagesInit = async ({commit}) => {
    const baseURL = 'https://miianodeprogram.azurewebsites.net:443/allReviews'
    const result = await axios.get(baseURL)
    commit('MESSAGES__INIT', result.data)
}

export const messageSend = async ({commit}, data) => {
    console.log(data);
    const baseURL = 'https://miianodeprogram.azurewebsites.net:443/createReview'
    const result = await axios.post(baseURL, {content: data})
    commit('MESSAGE__RELOAD', result.data)
}

export const query = async ({ commit },data) => {
  const getLocation = function(){
    return new Promise(function(resolve, reject) {
      if (navigator.geolocation){
        let options = {enableHighAccuracy : true, maximumAge : 10000, timeout :10000};
        navigator.geolocation.getCurrentPosition(
          (pos)=>{
            let mylocation =[pos.coords.longitude,pos.coords.latitude];
            console.log(`使用者經緯度：${pos.coords.longitude},${pos.coords.latitude}`);
            resolve(mylocation);
          },
          (err)=>{console.log(err);reject(err)},
          options);
      }else{
        console.log('目前不支援定位功能');
      }
    });
  };

    let mylocation=[];
    try{
    mylocation = await getLocation();
    }catch(error){//Promise是error時
    mylocation=["",""];
    console.log("你要開啟定位喔");
    }
    let distance = data['distance'] || 10;//目前預設判斷30公里內
    let city=data['regionValue'] || "";
    let min_score=Number(data['minValue']) || 0;
    let max_score=Number(data['maxValue']) || 100;
    const baseURL = 'https://miianodeprogram.azurewebsites.net:443/hospital/query'
    let newURL = baseURL+
    '?distance='+distance+'&lon='+mylocation[0]+'&lat='+mylocation[1]+
    '&city='+city+
    '&min_score='+min_score+'&max_score='+max_score;
    console.log(newURL);
    const result = await axios.get(newURL)
    // console.log(result.data);
    commit('SEARCH__RESULT', result.data)

}