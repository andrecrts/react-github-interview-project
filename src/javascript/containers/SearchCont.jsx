// ---Dependencys
import React, { useReducer, useEffect } from 'react';
import { Tabs, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  updateSearchList,
  cleanSearchList,
  updateUserList
} from 'Actions/search';
import { changeLoadState } from 'Actions/loading';
// ---Components
import SearchComp from 'Comp/SearchComps/SearchComp';
// ---ComonComponents
import LoadingScreen from 'CommonComps/LoadingScreen';
// ---Others
import { insertBookmark } from 'Others/peticiones';

const { TabPane } = Tabs;

const tabTitles = ['Search repositories', 'Repositories of a user'];

const typesR = {
  SET_DATA: 'SET_DATA'
};

function reducerSearch(state, action) {
  const { type, payload } = action;
  switch (type) {
    case typesR.SET_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
}

// ------------------------------------------ COMPONENT-----------------------------------------
function SearchCont() {
  const [state, dispatch] = useReducer(reducerSearch, {
    activeKey: '1'
  });

  // Redux States
  const { currentList } = useSelector(reducers => reducers.searchReducer);
  const { loading } = useSelector(reducers => reducers.loadingReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const updateSearch = (searchParam, loadingMethod) =>
    dispatchR(updateSearchList(searchParam, loadingMethod));
  const updateUser = (searchParam, loadingMethod) =>
    dispatchR(updateUserList(searchParam, loadingMethod));
  const cleanSearch = () => dispatchR(cleanSearchList());
  const changeLoading = flag => dispatchR(changeLoadState(flag));

  useEffect(() => {
    cleanSearch();
  }, []);

  function doSearch(searchParam) {
    cleanSearch();
    updateSearch(searchParam, changeLoading);
  }

  function doUserSearch(searchParam) {
    cleanSearch();
    updateUser(searchParam, changeLoading);
  }

  function successModal() {
    const secondsToGo = 2;
    const modal = Modal.success({
      title: 'Success',
      content: 'The repository has been added to the bookmark page'
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  async function saveBookmark(index) {
    console.log('saving repo: ', currentList[index]);
    await insertBookmark(currentList[index]);
    successModal();
  }

  function getTabProducts(key) {
    cleanSearch();
    dispatch({ type: typesR.SET_DATA, payload: { activeKey: key } });
  }

  function handleTabs() {
    const { activeKey } = state;
    if (loading) {
      return <LoadingScreen />;
    }
    if (activeKey === '1') {
      return (
        <SearchComp
          currentList={currentList}
          doSearch={doSearch}
          saveBookmark={saveBookmark}
          label="Key word"
        />
      );
    }
    if (activeKey === '2') {
      return (
        <SearchComp
          currentList={currentList}
          saveBookmark={saveBookmark}
          doSearch={doUserSearch}
          label="User"
        />
      );
    }
    return <p>The current key is: {activeKey}</p>;
  }

  return (
    <React.Fragment>
      <div className="products-cont">
        {console.log('loading; ', loading)}
        <Tabs activeKey={state.activeKey} onChange={getTabProducts}>
          {tabTitles.map((unUsed, index) => (
            <TabPane tab={tabTitles[index]} key={`${index + 1}`}>
              {handleTabs()}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </React.Fragment>
  );
}

export default SearchCont;
