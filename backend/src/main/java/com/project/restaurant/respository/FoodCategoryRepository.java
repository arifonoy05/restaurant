package com.project.restaurant.respository;

import com.project.restaurant.entity.FoodCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodCategoryRepository extends JpaRepository<FoodCategory, Long>
{

}
