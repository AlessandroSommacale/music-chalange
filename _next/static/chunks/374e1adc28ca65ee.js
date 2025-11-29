(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1105,e=>{"use strict";var t=e.i(5661),r=e.i(348);let s=(0,t.createApi)({reducerPath:"firebaseApi",baseQuery:(0,r.fetchBaseQuery)({baseUrl:"https://music-challange-dfd5c-default-rtdb.europe-west1.firebasedatabase.app"}),tagTypes:["Favorites"],endpoints:e=>({getUserFavorites:e.query({query:e=>`/${e.userId}.json`,providesTags:["Favorites"]}),setUserFavorites:e.mutation({query:e=>({url:`/${e.userId}.json`,method:"PUT",body:e.favorites}),invalidatesTags:["Favorites"]})})}),{useGetUserFavoritesQuery:a,useSetUserFavoritesMutation:i}=s;e.s(["firebaseApi",0,s,"useGetUserFavoritesQuery",0,a,"useSetUserFavoritesMutation",0,i])},4072,e=>{"use strict";var t=e.i(1398),r=e.i(1788);function s(){return(s=Object.assign.bind()).apply(null,arguments)}let a=function(e){return r.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130 130"},e),r.createElement("path",{d:"M65 29c-6-10-16-17-28-17C20 12 7 25 7 42c0 33 18 38 58 76 40-38 58-43 58-76 0-17-13-30-30-30-12 0-22 7-28 17",style:{fill:"inherit"}}))};var i=e.i(8574),l=e.i(814);let o=l.default.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  background: none;
  border: none;
  width: 24px;
  height: 24px;

  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;var n=e.i(1105),d=e.i(2276);e.s(["default",0,({albumId:e})=>{let s=(0,d.useSelector)(e=>e.user),{data:l}=(0,n.useGetUserFavoritesQuery)({userId:s.localId},{skip:!s.localId}),[u,{isLoading:c,error:p}]=(0,n.useSetUserFavoritesMutation)(),v=!!l?.find(t=>e===t);(0,r.useEffect)(()=>{p&&window.alert("Unable to add album to favorites, please try again later")},[p]);let f=async(e,t)=>{let r;r="add"===t?[...l||[],e]:(l||[]).filter(t=>t!==e),await u({userId:s.localId,favorites:r})};return(0,t.jsx)(t.Fragment,{children:s.localId&&(v?(0,t.jsxs)(o,{onClick:t=>{e&&(t.preventDefault(),f(e,"remove"))},children:[(0,t.jsx)(a,{fill:"red"}),(0,t.jsx)("span",{className:"sr-only",children:"Remove from favorites"})]}):(0,t.jsx)(o,{onClick:t=>{e&&(t.preventDefault(),f(e,"add"))},children:c?(0,t.jsx)(i.Spinner,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{fill:"lightgray"}),(0,t.jsx)("span",{className:"sr-only",children:"Add to favorites"})]})}))})}],4072)},8497,e=>{e.n(e.i(4072))}]);