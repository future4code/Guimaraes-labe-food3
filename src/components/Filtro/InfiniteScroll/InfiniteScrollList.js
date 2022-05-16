import React, { useState } from 'react'
import PostItem from './PostItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import CircularProgress from '@material-ui/core/CircularProgress'


const data = '0'

const limit = 5


const InfiniteScrollList = () => {
    const [postData, setPostData] = useState(data.slice(0, limit))
    const [visible, setVisible] = useState(limit)
    const [hasMore, setHasMore] = useState(true)

    const fetchData = () => {
        const newLimit = visible + limit
        const dataToAdd = data.slice(visible, newLimit)

        if (data.length > postData.length) {
            setTimeout(() => {
                setPostData([...postData].concat(dataToAdd))
            }
                , 2000);
            setVisible(newLimit)
        } else {
            setHasMore(false)
        }
    }

    return (
        <>
        <InfiniteScroll
         dataLength={postData.length}
         next={{ fetchData }}
         hasMore={hasMore}
         loader={<CircularProgress />}
        >
                {postData.map((item) => {
                return (<PostItem key={item.id} list={item.list} />
                )
            })}

        </InfiniteScroll>
        </>
      
    

  )
}

export default InfiniteScrollList