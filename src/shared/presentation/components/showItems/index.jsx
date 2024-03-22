import React, { useState, useEffect } from 'react';
import { extractIdAndResourceType, categoryFoils } from '../../../application/helpers/common-functions';
import InformationModal from '../../../../domains/myAlbum/presentation/components/InformationModal';
import PropTypes from 'prop-types';
import './showItems.scss';

const ShowItems = ({title, filteredData, dataSize}) => {
    const [albumData, setAlbumData] = useState(Array(dataSize).fill(null));
    const [showModal, setShowModal] = useState(false)
    const [dataCard, setDataCard] = useState(null)

    useEffect(() => {
        filteredData.forEach(data => {
            const { id, resourceType} = extractIdAndResourceType(data?.url);
            const category = categoryFoils(id,resourceType ); 
            updateAlbumData(id, { ...data,resourceType,category });
        });
    }, [filteredData]);


    const updateAlbumData = (id, data) => {
        setAlbumData(prevAlbumData => {
            const updatedAlbumData = [...prevAlbumData];
            updatedAlbumData[id - 1] = data;
            return updatedAlbumData;
        });
    };

    const handleCard = (data) => {
        setDataCard(data)
        setShowModal(true);
    }

    const renderAlbum = () => {
        return Array.from({ length: dataSize }, (_, index) => {
            const id = index + 1;
            const data = albumData[index];
            return (
                <div key={id} className="card" onClick={() => data && handleCard(data)} data-testid="card">
                    <h1>{id}</h1>
                    {data ? (
                        <>
                            <p>{data.name || data.title}</p>
                            <p>{data.category}</p>
                        </>
                    ) : null}
                </div>
            );
        });
    };

    return(
        <>

            <div className="show-item-container">
                <h2 className="title">
                    {title}
                </h2>

                <div className='foils-data-container'>
                    { renderAlbum() }
                </div>
            </div> 

            {
                showModal && (
                    <div>
                        <InformationModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                            data={dataCard}
                        />
                    </div>   
                )
            }
        </>
        
    )
}

ShowItems.propTypes = {
    title: PropTypes.string,
    filteredData: PropTypes.array,
};


export default ShowItems;