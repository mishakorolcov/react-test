import {useEffect, useState} from 'react';
import localBanners from '../../data/banner.json';
import axios from "axios";


const Banner = () => {
    const [banners, setBanners] = useState([]);

    // Fetch banners from backend on component mount or fallback to local data
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('/api/banner', { timeout: 1000 }); // Adjust URL to your endpoint
                if (response && response.data) {
                    setBanners(response.data); // Use server data if available
                }
            } catch (error) {
                console.error('Error fetching banners; using local data:', error);
                setBanners(localBanners); // Use local JSON as fallback
            }
        };

        fetchBanners();
    }, []);

    // Check if there are any banners to display
    console.log('banners', banners)
    if (!banners.length) {
        return <p>Loading banners...</p>;
    }
    console.log('1111111')

    return(<div>
        1111
    </div>)
}

export default Banner