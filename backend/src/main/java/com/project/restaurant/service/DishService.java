package com.project.restaurant.service;

import com.project.restaurant.dto.DishDTO;
import com.project.restaurant.entity.Dish;
import com.project.restaurant.respository.DishRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DishService {

    private final DishRepository repository;
    private final ModelMapper modelMapper = new ModelMapper();

    public List<DishDTO> getDishes()
    {
        List<Dish> dishes = repository.findAll();
        List<DishDTO> dishDTOS = dishes.stream().map(item -> modelMapper.map(item, DishDTO.class)).collect(Collectors.toList());

        return dishDTOS;
    }

    public DishDTO getDishById(String dishId)
    {
        DishDTO dishDTO = new DishDTO();
        Optional<Dish> dish = repository.findById(Long.valueOf(dishId));

        if (dish.isPresent())
        {
            dishDTO = modelMapper.map(dish, DishDTO.class);
        }

        return dishDTO;
    }

    public DishDTO addDish(DishDTO dishDTO)
    {
        DishDTO newDishDto = new DishDTO();
        Dish dish = modelMapper.map(dishDTO, Dish.class);

        if(repository.save(dish).getId() != 0)
        {
            newDishDto = modelMapper.map(dish, DishDTO.class);
        }

        return newDishDto;
    }

    public DishDTO updateDish(DishDTO dishDTO)
    {
        DishDTO updatedDishDto = new DishDTO();
        Optional<Dish> dish = repository.findById(dishDTO.getId());

        if(dish.isPresent())
        {
            Dish newDish = modelMapper.map(dishDTO, Dish.class);
            Dish updatedDish = repository.save(newDish);
            updatedDishDto = modelMapper.map(updatedDish, DishDTO.class);
        }
        return updatedDishDto;
    }

    public boolean deleteDish(String id)
    {
        Optional<Dish> dish = repository.findById(Long.valueOf(id));

        try {
            if(dish.isPresent())
            {
                repository.delete(dish.get());
                return true;
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return  false;

    }
}
