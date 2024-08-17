import './search.scss';
import React from 'react';
import { useNavigate  } from "react-router-dom";

import { Input, Space  } from "antd";


function Search({  }) {

  let navigate = useNavigate();

  const { Search } = Input;
  const onSearch = (value, _e, info) => {
    //console.log(info?.source, value);

    if(value != "") {
      return navigate(`/search-results/${value}`);
    }
  }

	return (
		<div className='search-area'>
			<Space direction="vertical">
				<Search
					className='search-area__input'
					placeholder="Search for a movie..."
					allowClear
					enterButton="Search"
					size="large"
					onSearch={onSearch}
				/>
			</Space>
		</div>
	);
}

export default Search;