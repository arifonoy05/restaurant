package com.project.restaurant.restController;

import com.project.restaurant.dto.RestaurantDTO;
import com.project.restaurant.service.RestaurantService;
import com.project.restaurant.util.enums.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/restaurants", method = RequestMethod.GET)
@RequiredArgsConstructor
public class RestaurantRestController {

    private final RestaurantService service;

    @GetMapping("/list")
    public ResponseEntity<List<RestaurantDTO>> getAllRestaurants(){
        List<RestaurantDTO> resultList = service.getAllRestaurants();
        return new ResponseEntity<>(resultList, HttpStatus.FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantDTO> getRestaurantById(@PathVariable("id") String id){
        RestaurantDTO result = service.getRestaurantById(id);
        return new ResponseEntity<>(result, HttpStatus.FOUND);
    }

    @PostMapping("/add")
    public ResponseEntity<RestaurantDTO> addRestaurant(@RequestBody RestaurantDTO restaurantDTO)
    {
        RestaurantDTO response = service.addRestaurant(restaurantDTO);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/update")
    public ResponseEntity<RestaurantDTO> updateRestaurant(@RequestBody RestaurantDTO restaurantDTO){
        RestaurantDTO response = service.updateRestaurant(restaurantDTO);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<HttpStatus> deleteRestaurant(@RequestBody String id){
        if(service.deleteRestaurant(id)){
            return new ResponseEntity<>(HttpStatus.OK, HttpStatus.OK);
        }
        else return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
