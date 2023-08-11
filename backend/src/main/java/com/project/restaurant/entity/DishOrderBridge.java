package com.project.restaurant.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Table(name = "DISH_ORDER_BRIDGE")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DishOrderBridge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    @Column(name = "DISH_ID")
    public long dishId;
    @Column(name = "ORDER_ID")
    public long orderId;
    @Column(name = "CREATED_AT")
    private Timestamp createdAt;
    @Column(name = "UPDATED_AT")
    private Timestamp updatedAt;
    @Column(name = "CREATED_BY")
    private long createdBy;
    @Column(name = "UPDATED_BY")
    private long updatedBy;

}
