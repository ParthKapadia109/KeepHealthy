import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { search_Meal_By_ID as url } from '../../Utils/constants'
import { AppContext } from './Context'
import AddToCart from './AddToCart'

const SelectedMeals = () => {

    const { selected_Meals: mealItems, fetchSelectMeal } = useContext(AppContext);
    const { id } = useParams();
    const { _id, title, image, category, description, price } = mealItems;

    useEffect(() => {
        fetchSelectMeal(`${url}${id}`)
    }, [id])

    return (
        <section className='selected-meals'>
            <div className='container'>

                <nav aria-label="breadcrumb" style={{ '--bs-breadcrumb-divider': "'>'" }}>
                    <ol className="breadcrumb" style={{ background: 'none', fontSize: '1.2rem', color: '#154726' }}>
                        <li className="breadcrumb-item"><Link to="/" style={{ color: '#154726', textDecoration: 'none' }}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/meals" style={{ color: '#154726', textDecoration: 'none' }}>Meals</Link></li>
                    </ol>
                </nav>

                <div className='row my-3'>
                    <div className='col-md-6'>
                        <div className='product'>
                            <img src={`http://localhost:5000/${image}`} alt={title} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='product_details'>
                            <h1>{title}</h1>
                            <div className='d-flex'>
                                <h3>{category}</h3>
                                <h4>₹ {price}</h4>
                            </div>
                            <div className='product_description'>
                                <h6>{description}</h6>
                            </div>
                            <AddToCart mealItems={mealItems}  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectedMeals
