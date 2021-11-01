import { useSelector } from '../stores/index'


function useSortedMemoList(){
  const MemoList = useSelector(state => state.memoList);
  const MemoSort = MemoList.slice();
  MemoSort.sort(function(a, b) {
    if (a.created_dt < b.created_dt) {
      return 1;
    } else {
      return -1;
    }
  })
  const FavoriteMemoList = MemoSort.filter(function( item ){
    return item.favorite === true
  });
  const NoFavoriteMemoList = MemoSort.filter(function( item ){
    return item.favorite === false
  })
  return [...FavoriteMemoList, ...NoFavoriteMemoList];
      
};

export default useSortedMemoList;