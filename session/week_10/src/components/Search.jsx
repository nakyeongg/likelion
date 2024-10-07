import React, { useState, useEffect, useRef } from 'react';
import Slider from './Section/Slider';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import search from '../assets/img/icon/search.svg';
import heart from '../assets/img/icon/heart.svg';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [markers, setMarkers] = useState([]);
    const [places, setPlaces] = useState([]);
    const [map, setMap] = useState();
    const [showList, setShowList] = useState(false);
    const resultRef = useRef(null);
    const containerRef = useRef(null);

    const handleSearch = () => {
        if (!map || !window.kakao) return;

        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(keyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const bounds = new window.kakao.maps.LatLngBounds();
                let newMarkers = [];
                let placeList = [];

                data.forEach((place) => {
                    newMarkers.push({
                        position: {
                            lat: place.y,
                            lng: place.x,
                        },
                        content: place.place_name,
                    });

                    bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));

                    placeList.push({
                        name: place.place_name,
                        address: place.address_name,
                    });
                });

                setMarkers(newMarkers);
                setPlaces(placeList);
                map.setBounds(bounds);
            }
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                resultRef.current && !resultRef.current.contains(event.target) &&
                containerRef.current && !containerRef.current.contains(event.target)
            ) {
                setShowList(false);
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [resultRef, containerRef]);

    return (
        <div ref={containerRef} className={`Search_wrap container ${showList ? 'back' : ''}`}>
            <Slider />
            <div className='search'>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="장소를 검색해주세요!"
                />
                <img onClick={handleSearch} src={search} alt="" />
            </div>
            <Map
                center={{ lat: 37.566826, lng: 126.9786567 }}
                style={{ width: '100%', height: '350px' }}
                level={3}
                onCreate={setMap}
            >
                {markers.map((marker, index) => (
                    <MapMarker
                        key={`marker-${marker.content}-${index}`}
                        position={marker.position}
                        title={marker.content}
                    />
                ))}
                <button className='menu' onClick={() => setShowList(!showList)}>
                    <p>목록 보기</p>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
            </Map>
            {showList && (
                <div ref={resultRef} className={`result ${showList ? 'show' : ''}`}>
                    <div></div>
                    <h2>"{keyword}" 주변에 있는 곳</h2>
                    <ul>
                        {places.map((place, index) => (
                            <li key={index}>
                                <h4>{place.name}</h4>
                                <img src={heart} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
