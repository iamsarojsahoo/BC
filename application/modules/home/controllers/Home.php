<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MX_Controller 
{
public function __construct() 
{
parent::__construct();
$this->load->model('Home_model');
$this->load->helper('url');
}

public function index()
{
$data['title'] = "Home";
$data['object'] = $this;
$this->load->view('partials/header',$data);
$this->load->view('index',$data);
$this->load->view('partials/footer',$data);
}


public function contact()
{
$data['title'] = "Contact";
$data['object'] = $this;
$this->load->view('partials/header',$data);
$this->load->view('contact',$data);
$this->load->view('partials/footer',$data);
}
}