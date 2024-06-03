package com.mlp.lab.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mlp.lab.dto.ShareRoomDto;
import com.mlp.lab.dto.PageRequestDto;
import com.mlp.lab.dto.PageResponseDto;
import com.mlp.lab.service.ShareRoomService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/shareRoom")
@RequiredArgsConstructor
public class ShareRoomController {
    private final ShareRoomService shareRoomService;

    @GetMapping("/list")
    public PageResponseDto<ShareRoomDto> List(PageRequestDto pageRequestDto){
        return shareRoomService.list(pageRequestDto);
    }
    
}