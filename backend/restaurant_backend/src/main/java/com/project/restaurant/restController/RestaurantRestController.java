package com.project.restaurant.restController;

import com.project.restaurant.dto.RestaurantDTO;
import com.project.restaurant.service.RestaurantService;
import com.project.restaurant.util.enums.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/restaurants", method = RequestMethod.GET)
@RequiredArgsConstructor
public class RestaurantRestController {

    private final RestaurantService service;

    @PostMapping("/add")
    public ResponseEntity<RestaurantDTO> addRestaurant(@RequestBody RestaurantDTO restaurantDTO)
    {
        CommonResponse response = service.addRestaurant(restaurantDTO);

        return new ResponseEntity<>(restaurantDTO, HttpStatus.CREATED);
    }
}
