package com.project.restaurant.service;

import com.project.restaurant.dto.RestaurantDTO;
import com.project.restaurant.respository.RestaurantRepository;
import com.project.restaurant.util.enums.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;

    public CommonResponse addRestaurant(RestaurantDTO restaurantDTO)
    {
        CommonResponse response = new CommonResponse();


        return response;
    }

}
