import React, { useEffect, useState }  from 'react';
import './ListPage.scss';
import ButtonFilter from '../../components/list/ButtonFilter/ButtonFilter';
import SliderFilter from '../../components/list/SliderFilter/SliderFilter';
import ListTable from '../../components/list/ListTable/ListTable';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA_REQUEST,FILTER_DATA } from '../../store/actions';

function ListPage() {

    const dispatch = useDispatch();

    //Selectors 

    const filteredData = useSelector((state) => state.filteredData);
    const realData = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);


    //States 

    const [filter, setFilter] = useState({ages:[],costs:[]});
    const [agesFilter, setAgesFilter] = useState([]);
    const [costsFilter, setCostsFilter] = useState([]);

    //Effects 

    useEffect(() => {
      dispatch({ type: FETCH_DATA_REQUEST });
    }, [dispatch]);

    useEffect(()=> {
      if(realData && realData.length > 0){
        const uniqueAges = [...new Set(realData.map(unit => unit.age))];
        const costKeys = realData.flatMap(unit => {
          if (unit.cost && typeof unit.cost === 'object') {
            return Object.keys(unit.cost);
          }
          return [];
        });
        const uniqueCostTypes = [...new Set(costKeys)];
        setAgesFilter(uniqueAges);
        setCostsFilter(uniqueCostTypes);
      }
    },[realData])


    useEffect(() => {
        dispatch({ type: FILTER_DATA, payload:filter });
    },[filter])


    //Functions
    
    const handleSetAgeFilter = (value) => {
      setFilter((prevFilter) => {
        if (value === 'All') {
          return {
            ...prevFilter,
            ages: [] 
          };
        }

        return {
        ...prevFilter,
        ages: [...prevFilter.ages, value]
        };
      });
    };

    const handleSetCostFilter = (value) => {
      setFilter((prevFilter) => {
        const { title, values, checked } = value;
    
        if (checked) {
          const updatedCosts = prevFilter.costs.map((cost) =>
            cost.title === title
              ? { ...cost, values }
              : cost
          );
          const newCosts = updatedCosts.some((cost) => cost.title === title)
            ? updatedCosts
            : [...updatedCosts, { title, values }];
          return {
            ...prevFilter,
            costs: newCosts
          };
        } else {
          const newCosts = prevFilter.costs.filter((cost) => cost.title !== title);
          return {
            ...prevFilter,
            costs: newCosts
          };
        }
      });
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div className="units">
        <div className="units-filters">
            <span className="units-filters-title">Ages</span>
            <div className="units-filters-container">
              <ButtonFilter 
                  active={filter.ages.length == 0}
                  text={'All'}
                  callback={handleSetAgeFilter}
              />
              {agesFilter.map((age, index) => (
                <ButtonFilter 
                  key={index}
                  active={filter.ages.includes(age)}
                  text={age}
                  callback={handleSetAgeFilter}
                />
              ))}
            </div>
        </div>
        <div className="units-sliders">
            <span className="units-sliders-title">Costs</span>
            <div className="units-sliders-container">
              {costsFilter.map((cost, index) => (
                  <SliderFilter   
                    key={index}  
                    text={cost}
                    active={!filter.costs.find((c) => c.title === cost)} 
                    callback={handleSetCostFilter} 
                    min={0} 
                    max={200} 
                  />
              ))}  
            </div>
        </div>
        <div className="units-table">
          <ListTable data={filteredData ? filteredData : []}/>
        </div>
      </div>
    );
}
  
export default ListPage;
  